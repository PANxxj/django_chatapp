from .views import *
from django.urls import path,include

urlpatterns = [
    path('',index,name='index'),
    path('about',about,name='about'),
]
