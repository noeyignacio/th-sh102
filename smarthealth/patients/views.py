from django.shortcuts import render, redirect 
from users.decorators import unauthenticated_user, allowed_users
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .forms import PatientForm
from .models import *


def createPatient(request):

    form = PatientForm()
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('doctorsPatientsList')

    context = {
        'form' : form,
    }

    return render(request, 'patients/views/patient_create.html', context)

def updatePatient(request, pk):

    patient_info = Patient.objects.all()
    patient = Patient.objects.get(id=pk)
    form = PatientForm(instance=patient)

    if request.method == 'POST':
            form = PatientForm(request.POST, instance=patient)
            if form.is_valid:
                form.save()
                return redirect('doctorsPatientsList')

    context = {
        'form' : form,
    }

    return render(request, 'patients/views/patient_update.html', context)

def deletePatient(request, pk):

    patient = Patient.objects.get(id=pk)
    patient.delete()

    return redirect('doctorsPatientsList')


# @unauthenticated_user
def loginPatient(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect(reversed('patientProfilePage'))
        

    
    return render(request, 'auth/views/patientloginpage.html', {})


# @login_required(login_url='home')
# @allowed_users(allowed_roles=['Patient'])
def patientProfilePage(request):

    return render(request, 'profile/views/patient_profilepage.html')


def logoutPage(request):
    logout(request)
    return redirect('home')