from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.core import serializers

from datetime import date, datetime
from django.db.models.functions import TruncMonth, TruncDate
from django.db.models import Count
from time import strftime

from users.decorators import unauthenticated_user, allowed_users


from patients.models import Patient

@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsDashboardHospital(request):

    patient = Patient.objects.all()

    today = date.today().strftime('%m')
    totalPatientsTodaysMonth = Patient.objects.annotate(month=TruncMonth('date_joined'))\
            .values('month').annotate(total=Count('date_joined')).filter(date_joined__month=today)

    total_patient = patient.count()
    total_patient_dengue = Patient.objects.filter(case='Dengue').count()
    total_patient_cleaning = Patient.objects.filter(case='Cleaning').count()
    total_patient_corona = Patient.objects.filter(case='Corona Virus').count()

    
    total_patient = patient.count()

    context = {
        'patient' : patient,
        'total_patient' : total_patient,
        'total_patient_dengue' : total_patient_dengue,
        'total_patient_cleaning' : total_patient_cleaning,
        'total_patient_corona' : total_patient_corona,
        'totalPatientsTodaysMonth': totalPatientsTodaysMonth,

    }

    return render(request, 'doctors/views/doctors_dashboard_hospital.html', context)

@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsDashboardDental(request):

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

    return render(request, 'doctors/views/doctors_dashboard_dental.html', context)


@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsDashboardAnalytics(request):

    return render(request, 'doctors/views/doctors_dashboard_analytics.html')


@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsPatientsList(request):

    patient = Patient.objects.all()

    context = {
        'patient' : patient
    }

    return render(request, 'doctors/views/doctors_patients_list.html', context)

@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsPatientRegister(request):

    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()

    context = {
        'form' : form
    }

    return render(request, 'doctors/views/doctors_register_nurse.html', context)


@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def doctorsNursesList(request):

    return render(request, 'doctors/views/doctors_nurses_list.html')


@login_required(login_url='home')
@allowed_users(allowed_roles=['Doctor'])
def profile(request, pk):

    patient = Patient.objects.get(id=pk)

    context = {
        'patient': patient
    }

    return render(request, 'profile/views/profilepage.html', context)