from django.contrib import admin
from django.urls import path
from banco.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('usuarios/', UserListView.as_view(), name='usuarios'),
    path('usuarios/<int:user_id>/', UserDetailView.as_view(), name='usuario-detail'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/registro/', UserRegistrationView.as_view(), name='register'),
    path('cuentas/', CuentasView.as_view(), name='cuentas'),
    path('cuentas/<int:nro_cuenta>/', CuentaView.as_view(), name='cuenta-detail'),
    path('cuentas/cliente/<int:cliente>/', CuentaClienteView.as_view(), name='cuenta-cliente'),
    path('cuentas/<int:idCliente>/nueva/', CuentaView.as_view(), name='nueva-cuenta'),
    path('tarjetas/<int:idCliente>/', TarjetasView.as_view(), name='tarjetas'),
    path('tarjeta/<int:nro_tarjeta>/', TarjetaView.as_view(), name='tarjeta-detail'), #NO HARÍA FALTA
    path('tarjeta/<int:idCliente>/nueva/', TarjetaView.as_view(), name='nueva-tarjeta'),
    path('prestamos/', ListarPrestamosView.as_view(), name='listar_prestamos'),
    path('prestamo/solicitar/', SolicitarPrestamoView.as_view(), name='solicitar_prestamo'),
    path('prestamo/aprobar/<int:pk>/', AprobarPrestamoView.as_view(), name='aprobar_prestamo'),
    path('prestamo/desaprobar/<int:pk>/', DesaprobarPrestamoView.as_view(), name='desaprobar_prestamo'),
    path('sucursales/', SucursalesView.as_view(), name='sucursales'),
]
