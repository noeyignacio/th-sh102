from django.shortcuts import render, redirect 
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

