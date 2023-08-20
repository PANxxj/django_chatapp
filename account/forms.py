from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import CustomUser

class LoginForm(AuthenticationForm):
    class Meta:
        model=CustomUser
        fields=('email','password')

class AddUserForm(forms.ModelForm):
    class Meta:
        model=CustomUser
        fields=('email','name','role','password')
        widgets={
            'email':forms.EmailInput(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
            'name':forms.TextInput(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
            'role':forms.Select(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
            'password':forms.TextInput(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
        }

class EditUserForm(forms.ModelForm):
    class Meta:
        model=CustomUser
        fields=('email','name','role')
        widgets={
            'email':forms.EmailInput(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
            'name':forms.TextInput(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            }),
            'role':forms.Select(attrs={
                'class':'w-full py-4 px-6 rounded-xl'
            })
        }