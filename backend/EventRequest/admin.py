from django.contrib import admin
from .models import NameForm


class FormAdmin(admin.ModelAdmin):
    list_display = ('RequestedEventTitle', 'RequestedEventDescription', 'RequestedEventDate')


admin.site.register(NameForm, FormAdmin)

