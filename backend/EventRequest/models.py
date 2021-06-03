from django import forms
from django.db import models


class NameForm(models.Model):
    RequestedEventTitle = models.CharField(max_length=120)
    RequestedEventDescription = models.CharField(max_length=120)
    RequestedEventDate = models.DateField()

    def _str_(self):
        return self.title
