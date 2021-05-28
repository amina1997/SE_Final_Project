from django.contrib import admin
from .models import Show_The_Bug

class LH_Admin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Show_The_Bug, LH_Admin)

