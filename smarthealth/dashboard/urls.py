from django.urls import path, include
from dashboard import views

urlpatterns = [
    path('dashboard/doctors/', views.doctorsDashboard, name='doctorsDashboard'),
]
