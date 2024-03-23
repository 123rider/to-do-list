from rest_framework.generics import GenericAPIView,CreateAPIView
from .serializers import UserDetailsSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.settings import api_settings


class ProfileView(GenericAPIView):
    serializer_class = UserDetailsSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return get_user_model().objects.filter(id=self.request.user.pk)[0]
    
    def get(self, request, *args, **kwargs):
        querryset= self.get_queryset()
        serializers = self.get_serializer(querryset)
        return Response(serializers.data)
    
    def put(self,request):
        querryset = self.get_queryset()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.update(querryset,request.data)
        header = self.get_success_headers(serializer.data)
        return Response(self.get_serializer(querryset).data,headers=header)
    def get_success_headers(self, data):
        try:
            return {'Location': str(data[api_settings.URL_FIELD_NAME])}
        except (TypeError, KeyError):
            return {}