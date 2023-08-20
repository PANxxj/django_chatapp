from .views import *
from django.urls import path,include
from django.contrib.auth.views import LoginView
from .forms import *
urlpatterns = [
    path('login/',LoginView.as_view(template_name='account/login.html',form_class=LoginForm),name='login')
]
