from django.urls import path, include
from dashboard import views

urlpatterns = [
    path('dashboard/doctors/hospital', views.doctorsDashboardHospital, name='doctorsDashboardHospital'),
    path('dashboard/doctors/analytics', views.doctorsDashboardAnalytics, name='doctorsDashboardAnalytics'),
    path('list/doctors/patients', views.doctorsPatientsList, name='doctorsPatientsList'),
    path('list/doctors/nurses', views.doctorsNursesList, name='doctorsNursesList')
]
