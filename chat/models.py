from django.db import models
from account.models import *

class Message(models.Model):
    body=models.TextField()
    send_by=models.CharField(max_length=225)
    created_at=models.DateTimeField(auto_now_add=True)
    created_by=models.ForeignKey(CustomUser,blank=True,on_delete=models.SET_NULL,null=True)


    class Meta:
        ordering=('created_at',)
    
    def __str__(self) -> str:
        return f'{self.send_by}'


class Room(models.Model):
    STATUS_CHOICE=(
        ('Waiting','Waiting'),
        ('Active','Active'),
        ('Closed','Closed'),
    )
    uuid=models.CharField(max_length=225)
    client=models.CharField(max_length=225)
    agent=models.ForeignKey(CustomUser,related_name='room',blank=True,null=True,on_delete=models.SET_NULL)
    message=models.ManyToManyField(Message,blank=True)
    url=models.CharField(max_length=255,blank=True,null=True)
    status=models.CharField(max_length=255,blank=True,null=True,choices=STATUS_CHOICE,default='Waiting')
    created_at=models.DateTimeField(auto_now_add=True)
    # created_by=models.ForeignKey(CustomUser,blank=True,on_delete=models.SET_NULL,null=True)


    class Meta:
        ordering=('-created_at',)
    
    def __str__(self) -> str:
        return f'{self.client} - {self.uuid}'