from rest_framework import serializers
from .models import NameForm


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = NameForm
        fields = ('RequestedEventTitle', 'RequestedEventDescription', 'RequestedEventDate')
