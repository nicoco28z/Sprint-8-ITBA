from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class SucursalAdmin(admin.ModelAdmin):
    list_display = ('id_sucursal', 'direccion', 'nombre', 'provincia', 'ciudad')

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'dni', 'sucursal', 'is_staff', 'is_superuser', 'tipo_cliente')
    search_fields = ('username', 'email', 'dni')
    list_filter = ('is_staff', 'is_superuser', 'sucursal')

    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('dni', 'sucursal', 'tipo_cliente')}),
    )

class CuentaAdmin(admin.ModelAdmin):
    list_display = ('nro_cuenta', 'saldo', 'cliente')

class PrestamoAdmin(admin.ModelAdmin):
    list_display = ('id_prestamo', 'fecha', 'monto', 'estado', 'cliente', 'cuenta')
    search_fields = ('id_prestamo', 'cliente__username') 

class TipoClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'maxCuentas', 'maxTarjetas', 'limitePrestamo')

admin.site.register(Sucursal, SucursalAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Cuenta, CuentaAdmin)
admin.site.register(Prestamo, PrestamoAdmin)
admin.site.register(Tipo_Cliente, TipoClienteAdmin)