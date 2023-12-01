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
    path('cuentas/cliente/<int:cliente>/', CuentaClienteView.as_view(), name='cuenta-cliente')
]
