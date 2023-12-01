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
            return JsonResponse(serializer.data, safe=False)

        except CustomUser.DoesNotExist:
            return HttpResponseNotFound('Cuenta no encontrada')


# Login VIEW (Recibe por body username y password, y utiliza la 
# autenticacion de Django para devolver los datos del usuario)
@authentication_classes([])
@method_decorator(csrf_exempt, name='dispatch')
class LoginView(APIView):
    def post(self, req):
        username = req.data.get('username')
        password = req.data.get('password')

        print(f'Username: {username}, Password: {password}')

        user = authenticate(req, username=username, password=password)

        if user is not None:
            login(req, user)
            serializer = CustomUserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)


# Register View (Recibe por body los datos requeridos para el registro, 
# este mismo utilizar un serializer para hacer el registro)
@authentication_classes([])
@method_decorator(csrf_exempt, name='dispatch')
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


