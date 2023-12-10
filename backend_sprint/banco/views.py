from django.http import JsonResponse, HttpResponseNotFound
from django.views import View
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import authentication_classes
from rest_framework.generics import CreateAPIView
from rest_framework.exceptions import NotFound

from .models import *
from .serializers import *

# Create your views here.
class UserListView(View):
    def get(self, req):
        users = CustomUser.objects.all()
        serializer = CustomUserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

class UserDetailView(View):
    def get(self, req, user_id):
        try:
            user = CustomUser.objects.get(id=user_id)
            serializer = CustomUserSerializer(user)
            data = serializer.data

            tipo_cliente_info = None
            if user.tipo_cliente:
                tipo_cliente_info = {
                    'nombre': user.tipo_cliente.nombre,
                    'maxCuentas': user.tipo_cliente.maxCuentas,
                    'maxTarjetas': user.tipo_cliente.maxTarjetas,
                    'limitePrestamo': user.tipo_cliente.limitePrestamo
                }
            data['tipo_cliente'] = tipo_cliente_info
            return JsonResponse(data, safe=False)

        except CustomUser.DoesNotExist:
            return HttpResponseNotFound('Cuenta no encontrada')
    
    def put(self, req, user_id):
        try:
            user = CustomUser.objects.get(id=user_id)
            user.__dict__.update(req.data)
            user.save()
        except:
            return Response({'failed': 'Error de servidor'}, status=status.HTTP_500_SERVER_ERROR)


# Login VIEW (Recibe por body username y password, y utiliza la 
# autenticacion de Django para devolver los datos del usuario)

class LoginView(APIView):
    def post(self, req):
        print(req.data)
        username = req.data.get('username')
        password = req.data.get('password')

        print(f'Username: {username}, Password: {password}')

        user = authenticate(req, username=username, password=password)

        if user is not None:
            login(req, user)
            serializer = CustomUserSerializer(user)
            data = serializer.data

            tipo_cliente_info = None
            if user.tipo_cliente:
                tipo_cliente_info = {
                    'nombre': user.tipo_cliente.nombre,
                    'maxCuentas': user.tipo_cliente.maxCuentas,
                    'maxTarjetas': user.tipo_cliente.maxTarjetas,
                    'limitePrestamo': user.tipo_cliente.limitePrestamo
                }
            data['tipo_cliente'] = tipo_cliente_info
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)


# Register View (Recibe por body los datos requeridos para el registro, 
# este mismo utilizar un serializer para hacer el registro)

class UserRegistrationView(CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserRegistrationSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        Cuenta.objects.create(cliente=user, saldo=0.0, principal=True)


# Vistas de Cuentas, (listado general, detalle una en especifico y listado por cliente)
class CuentasView(APIView):
    def get(self, req):
        cuentas = Cuenta.objects.all()
        serializer = CuentaSerializer(cuentas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CuentaView(APIView):
    def get(self, req, nro_cuenta):
        try:
            cuenta = Cuenta.objects.get(nro_cuenta = nro_cuenta)
            serializer = CuentaSerializer(cuenta)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Cuenta.DoesNotExist:
            return HttpResponseNotFound({'failed': 'No se encontro la cuenta'})
        
    def post(self, req, idCliente):

        try:
            user = CustomUser.objects.get(id = idCliente)
            cuentas = len((Cuenta.objects.all(cliente=user)))

            if (user.tipo_cliente.maxCuentas > cuentas):
                cuenta = Cuenta(saldo=0.0, cliente=user, principal=False)
                cuenta.save()
                return Response({'success' : 'Cuenta creada correctamente'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'detail': 'No puede crear mas cuentas'}, status=status.HTTP_404_NOT_FOUND) #Esto sería un 500: Server error
        except CustomUser.DoesNotExist:
            return HttpResponseNotFound({'failed' : 'No se encontró el cliente'})

class CuentaClienteView(APIView):
    def get(self, req, cliente):
        try:
            cuentas = Cuenta.objects.filter(cliente = cliente)
            if cuentas:
                serializer = CuentaSerializer(cuentas, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'failed': 'No se encontraron cuentas para el usuario.'}, status=status.HTTP_404_NOT_FOUND)
        except Cuenta.DoesNotExist:
            return HttpResponseNotFound({'failed': 'No se encontro la cuenta'})
        

"""Get de todas las tarjetas de un cliente"""
class TarjetasView(APIView):
    def get(slef, req, idCliente):
        try:
            cliente = CustomUser.objects.get(pk=idCliente)
            tarjetas = Tarjeta.objects.filter(cliente = cliente)
            if tarjetas:
                serializer = TarjetaSerializer(tarjetas, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'failed': 'No se encontraron tarjetas para el usuario.'}, status=status.HTTP_404_NOT_FOUND)
        except CustomUser.DoesNotExist:
            return HttpResponseNotFound({'failed': 'No se encontro el cliente'})

class TarjetaView(APIView):
    def get(self, req, nro_tarjeta):
        try:
            tarjeta = Tarjeta.objects.get(nro_tarjeta = nro_tarjeta)
            serializer = TarjetaSerializer(tarjeta)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        except Tarjeta.DoesNotExist:
            return HttpResponseNotFound({'failed': 'No se encontro la tarjeta'})
        

    def post(self, req, idCliente):
        try:
            user = CustomUser.objects.get(id = idCliente)
            tarjetas = len((Tarjeta.objects.all(cliente=user)))
            nro_tarjeta = req.data.get('nro_tarjeta')
            cvv = req.data.get('cvv')
            banco = req.data.get('banco')
            fecha_emision = req.data.get('fecha_emision')
            fecha_vencimiento = req.data.get('fecha_vencimiento')
            if (user.tipo_cliente.maxTarjetas > tarjetas):
                tarjeta = Tarjeta(nro_tarjeta=nro_tarjeta, cvv=cvv, banco=banco, fecha_emision=fecha_emision, fecha_vencimiento=fecha_vencimiento, cliente=user)
                tarjeta.save()
                return Response({'success' : 'Tarjeta agregada correctamente'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'detail': 'No puede agregar mas tarjetas'}, status=status.HTTP_404_NOT_FOUND) #Esto sería un 500: Server error
        except CustomUser.DoesNotExist:
            return HttpResponseNotFound({'failed' : 'No se encontró el cliente'})
        
class ListarPrestamosView(APIView):
    def get(self, req):
        prestamos = Prestamo.objects.all()
        serializer = PrestamoSerializer(prestamos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class SolicitarPrestamoView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = PrestamoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()

                return Response({'message': 'Préstamo creado exitosamente'}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        


class AprobarPrestamoView(APIView):
    def put(self, request, pk, *args, **kwargs):
        prestamo = self.get_prestamo(pk)
        if prestamo.estado == 'Pendiente':
            prestamo.estado = 'Aprobado'
            prestamo.save()
            serializer = PrestamoSerializer(prestamo)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'El préstamo no está pendiente de aprobación'}, status=status.HTTP_400_BAD_REQUEST)

    def get_prestamo(self, pk):
        return Prestamo.objects.get(pk=pk)


class DesaprobarPrestamoView(APIView):
    def put(self, request, pk, *args, **kwargs):
        prestamo = self.get_prestamo(pk)
        if prestamo.estado == 'Pendiente':
            prestamo.estado = 'Desaprobado'
            prestamo.save()
            serializer = PrestamoSerializer(prestamo)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'El préstamo no está pendiente de aprobación'}, status=status.HTTP_400_BAD_REQUEST)
    
    def get_prestamo(self, pk):
        return Prestamo.objects.get(pk=pk)

class SucursalesView(APIView):
    def get(self, req):
        try:
            sucursales = Sucursal.objects.all()
            serializer = SucursalSerializer(sucursales, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return HttpResponseNotFound({'error' : 'Error al buscar sucursales'})