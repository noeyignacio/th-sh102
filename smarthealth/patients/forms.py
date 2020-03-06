from django.forms import ModelForm
from django import forms
from .models import Patient


class PatientForm(ModelForm):

    firstName = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}))
    middleName = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Middle Name'}))
    lastName = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}))
    birthDate = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Birth Date'}))
    gender = forms.CharField(widget=forms.Select(attrs={'class': 'form-control', 'placeholder': 'Gender'},  choices = (
        [
            ('Male', 'Male'),
            ('Female', 'Female'),
            ('Other', 'Other'),
            ('Prefer not to say', 'Prefer not to say')
        ])
    ))
    mobile_number = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Mobile Number'}))
    maritalStatus = forms.CharField(widget=forms.Select(attrs={'class': 'form-control', 'placeholder': 'Civil Status'}, choices = (
        [
            ('Single', 'Single'),
            ('Married', 'Married'),
            ('Divorced', 'Divorced'),
            ('Legally Seperated', 'Legally Seperated'),
            ('Widowed', 'Widowed')
        ])
    ))
    homeAddress = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Home Address'}))
    city = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'City'}))
    country = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Country'}))
    birthDate = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Birth Date'}))
    postal = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Postal Code'}))
    case = forms.CharField(widget=forms.Select(attrs={'class': 'form-control', 'placeholder': 'Medical Case'}, choices = (
        [
            ('Dengue', 'Dengue'),
            ('Cleaning', 'Cleaning'),
            ('Corona Virus', 'Corona Virus')
        ])
    ))

   
    class Meta:
        model = Patient
        fields = [
            'firstName', 
            'middleName', 
            'lastName', 
            'birthDate',
            'gender',
            'mobile_number',
            'maritalStatus',
            'homeAddress',
            'city',
            'country',
            'postal',
            'case'
        ]