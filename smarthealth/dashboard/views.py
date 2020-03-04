from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm


def doctorsDashboardHospital(request):

    return render(request, 'doctors/views/doctors_dashboard_hospital.html')


def doctorsDashboardAnalytics(request):

    return render(request, 'doctors/views/doctors_dashboard_analytics.html')


def doctorsPatientsList(request):

    return render(request, 'doctors/views/doctors_patients_list.html')


def doctorsNursesList(request):

    return render(request, 'doctors/views/doctors_nurses_list.html')