from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms

class CreateUserForm(UserCreationForm):

    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Username'}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'label': 'Test', 'placeholder': 'Password'}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control', 'label': 'Test', 'placeholder': 'Retype Password'}))
    email = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'label': 'Test', 'placeholder': 'Email'}))
    
    class Meta:
        model = User
        fields = [
            'username','email', 'password1','password2' 
        ]