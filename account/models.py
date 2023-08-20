from django.db import models
import uuid
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,Group,Permission
from . managers import CustomUserManager
from django.utils import timezone

class CustomUser(AbstractBaseUser,PermissionsMixin):
    ROLE=(
        ('AGENT','AGENT'),
        ('MANAGER','MANAGER')
    )
    # id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    email=models.EmailField(unique=True)
    name=models.CharField(max_length=255,blank=True,default='')
    role=models.CharField(max_length=20,choices=ROLE,default='AGENT')    
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=False)
    date_joined=models.DateField(default=timezone.now)
    last_login=models.DateTimeField(blank=True,null=True)
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='customuser_set'  # Change this related_name
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='customuser_set'  # Change this related_name
    )

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    
    REQUIRED_FIELDS =[]

    objects=CustomUserManager()

    class Meta:
        verbose_name = "All Users"
        verbose_name_plural = "All Users"

    def __str__(self):
        return f"{self.email}"