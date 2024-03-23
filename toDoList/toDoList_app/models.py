from django.db import models
from django.contrib.auth import get_user_model



# Create your models here.
class Todo(models.Model):
    owner = models.ForeignKey(get_user_model(),on_delete=models.CASCADE,related_name='owner')
    title = models.CharField(max_length=100)
    create_time = models.DateTimeField(auto_now_add=True)
    is_done = models.BooleanField(default=False)
    description = models.CharField(max_length=1000,null=True, blank=True)
    
    
    def __str__(self):
        return self.title
    
