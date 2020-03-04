from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm


def clientDashboard(request):

    form = UserCreationForm()

    # if request.method == 'POST':
    #     form = UserCreationForm(request.POST)
    #     if form.is

    context = {
        'form' : form
    }

    return render(request, 'registerpage/views/registerpage.html', context)
