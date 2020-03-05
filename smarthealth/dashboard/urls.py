from django.urls import path, include
from dashboard import views

urlpatterns = [
    path('dashboard/doctors/hospital', views.doctorsDashboardHospital, name='doctorsDashboardHospital'),
    path('dashboard/doctors/dental', views.doctorsDashboardDental, name='doctorsDashboardDental'),
    path('dashboard/doctors/analytics', views.doctorsDashboardAnalytics, name='doctorsDashboardAnalytics'),
    path('list/doctors/patients', views.doctorsPatientsList, name='doctorsPatientsList'),
    path('dashboard/doctors/register/patient', views.doctorsPatientRegister, name='doctorsPatientRegister'),
    path('list/doctors/nurses', views.doctorsNursesList, name='doctorsNursesList'),
    path('profile/<str:pk>/', views.profile, name='profile')
]
