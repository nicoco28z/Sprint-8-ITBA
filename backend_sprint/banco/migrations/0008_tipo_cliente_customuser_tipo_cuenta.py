# Generated by Django 4.2.7 on 2023-12-04 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('banco', '0007_prestamo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tipo_Cliente',
            fields=[
                ('id_tipo', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=15)),
                ('maxCuentas', models.DecimalField(decimal_places=0, max_digits=2)),
                ('maxTarjetas', models.DecimalField(decimal_places=0, max_digits=2)),
                ('limitePrestamo', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.AddField(
            model_name='customuser',
            name='tipo_cuenta',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='banco.tipo_cliente'),
        ),
    ]
