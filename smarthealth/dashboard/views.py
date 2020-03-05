from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

from datetime import date, datetime
from django.db.models.functions import TruncMonth, TruncDate
from django.db.models import Count
from time import strftime

from patients.models import Patient

def doctorsDashboardHospital(request):

    patient = Patient.objects.all()

    today = date.today().strftime('%m')
    totalPatientsTodaysMonth = Patient.objects.annotate(month=TruncMonth('date_joined'))\
            .values('month').annotate(total=Count('date_joined')).filter(date_joined__month=today)

    total_patient = patient.count()

    context = {
        'patient' : patient,
        'total_patient' : total_patient,
        'totalPatientsTodaysMonth': totalPatientsTodaysMonth
    }

    return render(request, 'doctors/views/doctors_dashboard_hospital.html', context)


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