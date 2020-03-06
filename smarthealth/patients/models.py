from django.core.validators import RegexValidator
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from django.db import models

class Patient(models.Model):

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

    CASE = (
        ('Dengue', 'Dengue'),
        ('Cleaning', 'Cleaning'),
        ('Corona Virus', 'Corona Virus'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    username = models.CharField(max_length=100, null=True)
    lastName = models.CharField(max_length=100, null=True)
    firstName = models.CharField(max_length=100, null=True)
    middleName = models.CharField(max_length=100, null=True)
    homeAddress = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=30, null=True)
    state = models.CharField(max_length=30, null=True)
    postal = models.CharField(max_length=30, null=True)
    country = models.CharField(max_length=30, null=True)
    birthDate = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, blank=False)
    maritalStatus = models.CharField(max_length=20, null=True, choices=STATUS, blank=True)
    case = models.CharField(max_length=20, null=True, choices=CASE, blank=True)


    mobile_number = models.CharField(max_length=11, null=True,blank=False, validators=[RegexValidator(r'^\d{10,11}$')])

    # medications = models.TextField(max_length=300, blank=True)
    # medicalDirectives = models.TextField(max_length=300, blank=True)
    # medicalProblems = models.TextField(max_length=300, blank=True)
    # vitalSigns = models.TextField(max_length=300, blank=True)
    # physicalExam = models.TextField(max_length=300, blank=True)
    # medicalHistory = models.TextField(max_length=300, blank=True)
    # medicationPlan = models.TextField(max_length=300, blank=True)
    # medicalOrders = models.TextField(max_length=300, blank=True)

    # # Test
    # alkPhos = models.CharField(max_length=10, blank=True)
    # bun = models.CharField(max_length=10, blank=True)
    # calcium = models.CharField(max_length=10, blank=True)
    # chloride = models.CharField(max_length=10, blank=True)
    # co2 = models.CharField(max_length=10, blank=True)
    # creatinine = models.CharField(max_length=10, blank=True)
    # po4 = models.CharField(max_length=10, blank=True)
    # potassium = models.CharField(max_length=10, blank=True)
    # sgot = models.CharField(max_length=10, blank=True)
    # biliTotal = models.CharField(max_length=10, blank=True)
    # uricAcid = models.CharField(max_length=10, blank=True)
    # ldhTotal = models.CharField(max_length=10, blank=True)
    # sodium = models.CharField(max_length=10, blank=True)

    # # Personal
    # height = models.CharField(max_length=10, blank=True)
    # weight = models.CharField(max_length=10, blank=True)
    # temperature = models.CharField(max_length=10, blank=True)
    # tempSite = models.CharField(max_length=10, blank=True)
    # pulseRate = models.CharField(max_length=10, blank=True)
    # pulseRhytm = models.CharField(max_length=10, blank=True)
    # respRate = models.CharField(max_length=10, blank=True)
    # bpSystolic = models.CharField(max_length=10, blank=True)
    # bpDiastolic = models.CharField(max_length=10, blank=True)
    # cholesterol = models.CharField(max_length=10, blank=True)
    # hdl = models.CharField(max_length=10, blank=True)
    # ldl = models.CharField(max_length=10, blank=True)
    # bgRandom = models.CharField(max_length=10, blank=True)
    # cxr = models.CharField(max_length=10, blank=True)
    # ekg = models.CharField(max_length=10, blank=True)
    # papSmear = models.CharField(max_length=10, blank=True)
    # breastExam = models.CharField(max_length=10, blank=True)
    # mammogram = models.CharField(max_length=10, blank=True)
    # hemoccult = models.CharField(max_length=10, blank=True)
    # fluVax = models.CharField(max_length=10, blank=True)
    # pneumovax = models.CharField(max_length=10, blank=True)
    # tdBooster = models.CharField(max_length=10, blank=True)
    # footExam = models.CharField(max_length=10, blank=True)
    # eyeExam = models.CharField(max_length=10, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return str(self.lastName) + ', ' + str(self.firstName) + ' ' + str(self.middleName) + ' ' + str(self.username)


    