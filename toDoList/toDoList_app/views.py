from django.shortcuts import render
from django.views import View
from django.http import JsonResponse,HttpResponse

# Create your views here.
class Index(View):
    def get(self, request, *args, **kwargs):
        if kwargs.get("input_data") == "http":
            return HttpResponse("<h1>hello world</h1>")
        return JsonResponse({
            "message": "hello world"
        })
