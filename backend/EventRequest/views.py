from rest_framework import viewsets
from .serializers import FormSerializer
from .models import NameForm


class FormView(viewsets.ModelViewSet):
    serializer_class = FormSerializer
    queryset = NameForm.objects.all()
