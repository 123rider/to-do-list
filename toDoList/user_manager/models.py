import datetime
from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
import datetime
from uuid import uuid4
from django.conf import settings
from django.core.files.storage import FileSystemStorage

fs=FileSystemStorage(location=f"{settings.BASE_DIR}/storage/image/profie_picture")



# Create your models here.

class User(AbstractUser):
    username = None
    email = models.EmailField(_("email address"),unique=True)
    USERNAME_FIELD = "email"
    id = models.UUIDField(_("id"),primary_key=True,default=uuid4)
    
    REQUIRED_FIELDS=[]
    first_name= models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    profile_picture= models.ImageField(blank=True,null=True ,storage=fs)
    date_joined=models.DateTimeField(default=datetime.datetime.now)

class User_oauth(models.Model):
    user= models.OneToOneField(User,on_delete=models.CASCADE)
    