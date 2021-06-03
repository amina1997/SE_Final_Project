from django.contrib import admin
from .models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'speaker', 'description', 'completed', 'date', 'photo', 'videoLink')


admin.site.register(Event, EventAdmin)
