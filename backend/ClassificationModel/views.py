from .forms import PasswordForm
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.core import serializers
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from .models import PasswordStrength
from .serializer import PasswordSerializers
import pickle
import json
import numpy as np
import pandas as pd
from django.shortcuts import render


class CustomerView(viewsets.ModelViewSet):
    queryset = PasswordStrength.objects.all()
    serializer_class = PasswordSerializers


def ShowStatus(request):
    try:
        encoder = pickle.load("/Users/Hannah/Desktop/ML Deploy/Encoder.sav")
        scaler = pickle.load("/Users/Hannah/Desktop/ML Deploy/Scaler.sav")
        model = pickle.load("/Users/Hannah/Desktop/ML Deploy/Prediction.sav")
        data = request.data
        unit = np.array(list(data.values()))
        unit = unit.reshape(1, -1)
        X = encoder.transform(unit)
        X = scaler.transform(unit)
        y_pred = model.predict(X)
        y_pred = (y_pred > 0.58)
        newdf = pd.DataFrame(y_pred, columns=['Status'])
        newdf = newdf.replace({True: 'Yes', False: 'No'})
        return JsonResponse('Your Status is {}'.format(newdf), safe=False)
        return (newdf.values[0][0], X[0])
    except ValueError as e:
        return Response(e.args[0], status.HTTP_400_BAD_REQUEST)


def FormView(request):
    if request.method == 'POST':
        form = PasswordForm(request.POST or None)
        if form.is_valid():
            Password = form.cleaned_data['password']
            myDict = (request.POST).dict()
            df = pd.DataFrame(myDict, index=[0])
            messages.success(request, 'Application Status: {}'.format(answer))
    form = PasswordForm()
    return render(request, 'templates/form.html', {'form': form})
