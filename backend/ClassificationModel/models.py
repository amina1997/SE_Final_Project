from django.db import models


class PasswordStrength(models.Model):
    password = models.CharField(max_length=25)
