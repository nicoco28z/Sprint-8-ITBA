from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import *

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = ['id_sucursal', 'direccion', 'provincia', 'ciudad']

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'dni', 'sucursal', 'is_staff', 'tipo_cliente')

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'dni', 'sucursal', 'password')

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = ('nro_cuenta', 'saldo', 'cliente', 'principal')

class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'