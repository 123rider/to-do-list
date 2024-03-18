from rest_framework.routers import DefaultRouter
from .views import Todo
from django.urls import include,path

toDoListAppRouters= DefaultRouter()
toDoListAppRouters.register(r'toDo',Todo,basename="toDoListApp")

urlpatterns = [
    path("",include(toDoListAppRouters.urls)),
]
