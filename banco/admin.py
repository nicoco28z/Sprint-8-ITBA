from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin

# Register your models here.


class SucursalAdmin(admin.ModelAdmin):
    list_display = ['id_sucursal', 'direccion', 'provincia', 'ciudad']

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'dni', 'sucursal', 'is_staff', 'is_superuser')
    search_fields = ('username', 'email', 'dni')
    list_filter = ('is_staff', 'is_superuser', 'sucursal')

    fieldsets = UserAdmin.fieldsets + (
        ('Custom Fields', {'fields': ('dni', 'sucursal')}),
    )

class CuentaAdmin(admin.ModelAdmin):
    list_display = ['nro_cuenta', 'saldo', 'cliente']

admin.site.register(Sucursal, SucursalAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Cuenta, CuentaAdmin)