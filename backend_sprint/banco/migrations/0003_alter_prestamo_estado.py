# Generated by Django 4.2.7 on 2023-12-02 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('banco', '0002_prestamo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prestamo',
            name='estado',
            field=models.CharField(choices=[('Aprobado', 'Aprobado'), ('Pendiente', 'Pendiente'), ('Desaprobado', 'Desaprobado')], default='Pendiente', max_length=20),
        ),
    ]
