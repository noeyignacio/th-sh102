from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from users.decorators import unauthenticated_user
from django.contrib.auth.models import Group

from patients.models import *
from .forms import CreateUserForm


def homePage(request):

    patient = Patient.objects.all()

    context = {
        'patient' : patient
    }

    return render(request, 'landingpage/views/home.html', context)


def policyPage(request):

    return render(request, 'landingpage/views/privacypolicy.html', {})


@unauthenticated_user
def loginPage(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('doctorsDashboardHospital')
        

    
    return render(request, 'auth/views/loginpage.html', {})


@unauthenticated_user
def registerPage(request):
    if request.user.is_authenticated:
		    return redirect('doctorsDashboardHospital')

    else:
            form = CreateUserForm()

            if request.method == 'POST':
                form = CreateUserForm(request.POST)
                if form.is_valid():
                    user = form.save()

                    group = Group.objects.get(name='Patient')
                    user.groups.add(group)

                    username = form.cleaned_data.get('username')

                    return redirect('login')

    context = {
        'form' : form
    }

    return render(request, 'auth/views/registerpage.html', context)


def logoutPage(request):
    logout(request)
    return redirect('home')