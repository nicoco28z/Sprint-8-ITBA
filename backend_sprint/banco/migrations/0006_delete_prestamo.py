# Generated by Django 4.2.7 on 2023-12-02 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('banco', '0005_remove_prestamo_empleado'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Prestamo',
        ),
    ]