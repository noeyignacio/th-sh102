from django.urls import path, include
from landingpage import views

urlpatterns = [
    path('', views.homePage, name='home'),
    path('privacy-policy/', views.policyPage, name='privacy')
]
