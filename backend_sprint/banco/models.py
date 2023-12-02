from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# Create your models here.
class Sucursal(models.Model):
    id_sucursal = models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=255)
    provincia = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.direccion}, {self.ciudad}, {self.provincia}"

class Tipo_Cliente(models.Model):
    id_tipo = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=15)
    maxCuentas = models.DecimalField(max_digits=2)
    maxTarjetas = models.DecimalField(max_digits=2)
    limitePrestamo = models.DecimalField(max_digits=10, decimal_places=2)

class CustomUser(AbstractUser):
    dni = models.CharField(max_length=8, unique=True)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.CASCADE, null=True, blank=True)
    groups = models.ManyToManyField(Group, related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_set', blank=True)
    tipo = models.ForeignKey(Tipo_Cliente, on_delete=models.DO_NOTHING) 

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
