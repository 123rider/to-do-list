from django.urls import path
from .views import *

urlpatterns = [
    path("<input_data>",Index.as_view(),name="index"),
]