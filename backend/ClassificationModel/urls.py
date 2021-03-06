from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
urlpatterns = [
                path('api/', include(router.urls)),
                path('status/', views.ShowStatus),
                path('form/', views.FormView, name='form'),
              ]
