from django.db import models
from user_manager.models import User

# Create your models here.
class Todo(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE,related_name='owner')
    title = models.CharField(max_length=100,unique=True)
    create_time = models.DateTimeField(auto_now_add=True)
    is_done = models.BooleanField(default=False)
    description = models.CharField(max_length=1000,null=True)
    
    def __str__(self):
        return self.title

