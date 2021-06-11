from rest_framework import serializers
from .models import PasswordStrength


class PasswordSerializers(serializers.ModelSerializer):

    class meta:
        model = PasswordStrength
        fields = '__all__'
