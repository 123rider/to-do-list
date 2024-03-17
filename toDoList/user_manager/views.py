from django.views.generic import TemplateView,View
from django.http import HttpResponseRedirect
from django.urls import reverse


# Create your views here.

class LoginView(TemplateView):
    template_name = 'login.html'
    
class ProfileView(View):
    def get(self, request, *args, **kwargs) -> HttpResponseRedirect:
        return HttpResponseRedirect(reverse('dashboard'))