from django.urls import path, include
from patients import views

urlpatterns = [
    path('register/', views.personalRegiterPage, name='personalRegisterPage'),
]
