from rest_framework import serializers
from .models import Event


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'speaker', 'description', 'completed', 'date', 'photo')
