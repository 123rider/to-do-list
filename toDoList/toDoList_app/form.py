from django import forms
from .models import Todo


class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields: list[str] = ['title', 'description', 'is_done']


