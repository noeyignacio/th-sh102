from django.urls import path, include
from django.contrib.auth import views as auth_views

from patients import views

urlpatterns = [
    path('list/doctors/patients/update/<str:pk>/', views.updatePatient, name='updatePatient'),
    path('list/doctors/patients/add/', views.createPatient, name='createPatient'),
    path('list/doctors/patient/delete/<str:pk>/', views.deletePatient, name='deletePatient'),
    path('patient/login/', auth_views.LoginView.as_view(template_name='auth/views/patientloginpage.html'), name='loginPatient'),
    path('patient/logout/', views.logoutPage, name='logoutPatient'),
    path('patientprofile/', views.patientProfilePage, name='patientProfilePage')
]
