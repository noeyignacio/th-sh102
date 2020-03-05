from django.core.validators import RegexValidator
from django.db import models

class Nurse(models.Model):


    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
        ('Prefer not to say', 'Prefer not to say')
    )

    STATUS = (
        ('Single', 'Single'),
        ('Married', 'Married'),
        ('Divorced', 'Divorced'),
        ('Legally Seperated', 'Legally Seperated'),
        ('Widowed', 'Widowed')
    )

    WARD_CHOICES = (
        ('SH-102', 'SH-102'),
        ('SH-101', 'SH-101'),
        ('SH-201', 'SH-201'),
    )


    username = models.CharField(max_length=100, null=True, default="N/A")
    lastName = models.CharField(max_length=100, null=True, default="N/A")
    firstName = models.CharField(max_length=100, null=True, default="N/A")
    middleName = models.CharField(max_length=100, null=True, default="N/A")
    birthDate = models.CharField(max_length=100, null=True, default="N/A")
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, blank=False)
    maritalStatus = models.CharField(max_length=20, null=True, choices=STATUS, blank=True)
    mobile_number = models.CharField(max_length=11, null=True,blank=False, validators=[RegexValidator(r'^\d{10,11}$')])
    email = models.EmailField(max_length=100, null=True)
    ward = models.CharField(max_length=10, choices=WARD_CHOICES, blank=True)
    
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.lastName + ', ' + self.firstName + ' ' + self.middleName
