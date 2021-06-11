from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from .models import Profile
import joblib


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ('title', 'points')


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'profile')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        NeuralNetwork_Model = joblib.load('C:/Amouna/SE/Final_Project/backend/core/NeuralNetwork_Model.joblib')
        pwd = [password]
        NeuralNetwork_Test = NeuralNetwork_Model.predict(pwd)

        if NeuralNetwork_Test == [0]:
            print('very weak password')
        if NeuralNetwork_Test == [1]:
            print('sorry not strong enough')
        if NeuralNetwork_Test == [2]:
            print('good enough')

        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'email')
