# Generated by Django 3.2 on 2021-05-31 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EventRequest', '0002_rename_todo_show_the_bug'),
    ]

    operations = [
        migrations.CreateModel(
            name='NameForm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('RequestedEventTitle', models.CharField(max_length=120)),
                ('RequestedEventDescription', models.CharField(max_length=120)),
                ('RequestedEventDate', models.DateField()),
            ],
        ),
        migrations.DeleteModel(
            name='Show_The_Bug',
        ),
    ]