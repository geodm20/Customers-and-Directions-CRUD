# Generated by Django 5.0.3 on 2024-03-27 03:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0002_rename_cliente_customer_rename_direccion_direction_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Direction',
            new_name='Location',
        ),
    ]
