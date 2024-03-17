from django.urls import path
from django.urls.resolvers import URLPattern
from .views import *

urlpatterns: list[URLPattern] = [
    path("",Index.as_view(),name="index"),
    path("dashboard/",Dashbord.as_view(),name="dashboard"),
    
]