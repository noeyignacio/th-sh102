from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm


def doctorsDashboard(request):

    return render(request, 'doctors/views/doctors_dashboard.html')
