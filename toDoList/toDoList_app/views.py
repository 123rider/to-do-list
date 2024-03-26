from rest_framework.permissions import IsAuthenticated
from dj_rest_auth.jwt_auth import JWTAuthentication
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import Todo_serializer
from . import models
from .permissions import IsOwner
class Todo(ModelViewSet):
    serializer_class = Todo_serializer
    models = models.Todo
    permission_classes=[IsAuthenticated,IsOwner]
    authentication_classes= [JWTAuthentication]
    def get_queryset(self,):
        self.user = self.request.user
        if self.user.is_authenticated:
            return models.Todo.objects.filter(owner=self.user)     
    
    @action(methods=["delete"],detail=True,authentication_classes=[IsAuthenticated,IsOwner])
    def get_status_done(self,pk=None):
          user = self.request.user
          if self.user.is_authenticated:
              todo = models.Todo.objects.get(pk=pk)
              todo.is_done = True
              todo.save()
              return Response(status=200)