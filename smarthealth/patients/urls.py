from django.urls import path, include
from patients import views

urlpatterns = [
    path('list/doctors/patients/update/<str:pk>/', views.updatePatient, name='updatePatient'),
    path('list/doctors/patients/add/', views.createPatient, name='createPatient'),
]
