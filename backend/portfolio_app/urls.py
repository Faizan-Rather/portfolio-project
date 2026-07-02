from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.get_projects, name='get_projects'),
]