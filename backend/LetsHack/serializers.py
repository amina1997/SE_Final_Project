from rest_framework import serializers
from .models import Show_The_Bug

class LH_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Show_The_Bug
        fields = ('id', 'title', 'description', 'completed')