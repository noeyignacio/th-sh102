from django.db.models.signals import post_save
from django.dispatch import receiver

from django.contrib.auth.models import User, Group
from .models import Patient


def create_patient(sender, instance, created, **kwargs):

    if created: 

        # Patient.objects.create(user=instance)
        
        group = Group.objects.get(name='Patient')
        instance.groups.add(group)

        Patient.objects.create(
            user=instance,
            username=instance.username,
        )

post_save.connect(create_patient, sender=User)