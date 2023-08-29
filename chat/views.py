import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Room
from account.models import CustomUser
from django.contrib.auth.decorators import login_required


@require_POST
def create_room(request,uuid):
    name=request.POST.get('name','')
    url=request.POST.get('url','')

    Room.objects.create(uuid=uuid,client=name,url=url)
    return JsonResponse({"message":"room created"})
