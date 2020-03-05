from django.forms import ModelForm
from .models import Patient


class PatientForm(ModelForm):
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
            'postal'
        ]