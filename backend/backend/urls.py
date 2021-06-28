from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
import ShowTheBug.views
import EventRequest.views
from rest_framework_jwt.views import obtain_jwt_token


router = routers.DefaultRouter()
router.register(r'events', ShowTheBug.views.EventView, 'event')
router.register(r'form', EventRequest.views.FormView, 'form')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('token-auth/', obtain_jwt_token),
    path('core/', include('core.urls')),
    path('chat/', include('chat.urls')),
    path('', include('ClassificationModel.urls')),
]
