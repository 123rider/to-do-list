from rest_framework import serializers
from .models import Todo


class Todo_serializer(serializers.ModelSerializer):
    class meta:
        model = Todo
        fields = "__all__"
        read_only_fields=["create_time"] 