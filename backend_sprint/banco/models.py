from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

from django.utils import timezone
from django.core.validators import MinValueValidator
from django.core.exceptions import ValidationError

from django.db.models.signals import post_save, pre_save



# Create your models here.
class Sucursal(models.Model):
    id_sucursal = models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=255)
    nombre = models.CharField(max_length=50)
    provincia = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.direccion}, {self.ciudad}, {self.provincia}"

class Tipo_Cliente(models.Model):
    id_tipo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=15)
    maxCuentas = models.DecimalField(max_digits=2, decimal_places=0)
    maxTarjetas = models.DecimalField(max_digits=2, decimal_places=0)
    limitePrestamo = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre

class CustomUser(AbstractUser):
    dni = models.CharField(max_length=8, unique=True)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE, null=True, blank=True)
    tipo_cliente = models.ForeignKey(Tipo_Cliente, on_delete=models.CASCADE, null=True)
    groups = models.ManyToManyField(Group, related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_set', blank=True)
    tipo = models.ForeignKey(Tipo_Cliente, on_delete=models.DO_NOTHING, null=True) 

    def __str__(self):
        return self.username
    

class Cuenta(models.Model):
    nro_cuenta = models.AutoField(primary_key=True)
    saldo = models.DecimalField(max_digits=10, decimal_places=2)
    cliente = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    principal = models.BooleanField()

    def __str__(self):
        return f"{self.nro_cuenta}: {self.saldo}"
    
class Tarjeta(models.Model):
    nro_tarjeta = models.DecimalField(primary_key=True, max_digits=15) #CONTROLAR LONGITUD EN FRONT
    cvv = models.DecimalField(max_digits=3) #CONTROLAR LONGITUD EN FRONT
    cliente = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    banco = models.CharField(max_length=50) #Sería el banco de la tarjeta (Mastercard / Amex / Santadner / etc)
    fecha_emision = models.DateField()
    fecha_vencimiento = models.DateField()

class Prestamo(models.Model):
    ESTADO_CHOICES = [
        ('Aprobado', 'Aprobado'),
        ('Pendiente', 'Pendiente'),
        ('Desaprobado', 'Desaprobado'),
    ]

    id_prestamo = models.AutoField(primary_key=True)
    fecha = models.DateTimeField(default=timezone.now)
    monto = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0.01)])
    estado = models.CharField(max_length=20, choices=ESTADO_CHOICES, default='Pendiente')
    cliente = models.ForeignKey('CustomUser', on_delete=models.CASCADE, limit_choices_to={'is_staff': False})
    cuenta = models.ForeignKey('Cuenta', on_delete=models.CASCADE, limit_choices_to={'cliente': models.F('cliente')})

    def __str__(self):
        return f"{self.id_prestamo}: {self.monto} - {self.estado}"
    
    def save(self, *args, **kwargs):
        if self.pk is not None:
            original = Prestamo.objects.get(pk = self.pk)
            if original.estado != 'Pendiente':
                raise ValueError("No puedes cambiar el estado de un préstamo una vez establecido.")
        super().save(*args, **kwargs)

def prestamo_post_save(sender, instance, **kwargs):
    if instance.estado == 'Aprobado':
        print('Cheque Aprobado')
        cuenta_vinculada = instance.cuenta
        cuenta_vinculada.saldo += instance.monto
        cuenta_vinculada.save()

def validar_prestamo(sender, instance, **kwargs):
    if instance.cuenta.cliente != instance.cliente:
        raise ValidationError("La cuenta no pertenece al mismo cliente que el préstamo.")
    cliente = CustomUser.objects.get(username = instance.cliente)
    tipo_cliente = Tipo_Cliente.objects.get(nombre = cliente.tipo_cliente)
    if instance.monto > tipo_cliente.limitePrestamo:
        raise ValueError("No puedes solicitar un prestamo mayor a tu limite")

post_save.connect(prestamo_post_save, sender=Prestamo)
pre_save.connect(validar_prestamo, sender=Prestamo)