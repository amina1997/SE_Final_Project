# Generated by Django 3.2 on 2021-06-20 13:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Message',
        ),
    ]
