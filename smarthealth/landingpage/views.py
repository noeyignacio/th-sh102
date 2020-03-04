from django.shortcuts import render

def homePage(request):

    return render(request, 'landingpage/views/home.html', {})

def policyPage(request):

    return render(request, 'landingpage/views/privacypolicy.html', {})