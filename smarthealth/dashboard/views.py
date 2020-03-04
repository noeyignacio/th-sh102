from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from patients.models import Patient

def doctorsDashboardHospital(request):

    return render(request, 'doctors/views/doctors_dashboard_hospital.html')


def doctorsDashboardAnalytics(request):

    return render(request, 'doctors/views/doctors_dashboard_analytics.html')


def doctorsPatientsList(request):

    patient = Patient.objects.all()

    context = {
        'patient' : patient
    }

    return render(request, 'doctors/views/doctors_patients_list.html', context)


def doctorsNursesList(request):

    return render(request, 'doctors/views/doctors_nurses_list.html')