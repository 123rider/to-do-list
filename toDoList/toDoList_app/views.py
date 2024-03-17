from django.shortcuts import render
from django.views.generic import TemplateView,ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Todo

# Create your views here.

class Index(TemplateView):
    template_name="index.html"


class Dashbord(LoginRequiredMixin,ListView):
    template_name="dashbord.html"
    model= Todo
    
    
    