from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

# Create your models here.

class User(AbstractUser):
    username = None
    email = models.EmailField(_("email address"),unique=True)
    USERNAME_FIELD = "email"
    
    REQUIRED_FIELDS=[]

class User_Detail(models.Model):
    user= models.OneToOneField(User,on_delete=models.CASCADE)
    first_name= models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    profile_picture= models.ImageField()

class User_oauth(models.Model):
    user= models.OneToOneField(User,on_delete=models.CASCADE)
    