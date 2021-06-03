from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Event


class EventView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Event.objects.all()
