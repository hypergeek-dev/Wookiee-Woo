from django.urls import path

from .views import test_view

urlpatterns = [
    path('profiles/', test_view, name='test'),
]
