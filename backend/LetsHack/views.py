from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LH_Serializer
from .models import Show_The_Bug


class LH_View(viewsets.ModelViewSet):
    serializer_class = LH_Serializer
    queryset = Show_The_Bug.objects.all()
