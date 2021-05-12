from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from LetsHack import views
from rest_framework_jwt.views import obtain_jwt_token

router = routers.DefaultRouter()
router.register(r'events', views.LH_View, 'event')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('token-auth/', obtain_jwt_token),
    path('core/', include('core.urls'))
]
