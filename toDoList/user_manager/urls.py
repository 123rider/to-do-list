from django.urls import path,include
from .views import *

urlpatterns = [
    path("login/" ,LoginView.as_view()),
    path('accounts/', include('allauth.urls')),
    path('accounts/profile/',ProfileView.as_view())
]
