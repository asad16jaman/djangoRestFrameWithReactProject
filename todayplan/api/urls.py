from django.urls import path
from .views import PlanCreate,ListPlan,DistroyPlan

urlpatterns = [
    path('api/',ListPlan.as_view(),name='plancreate'),
    path('create/',PlanCreate.as_view(),name='plancreate'),
    path('del/<int:pk>/',DistroyPlan.as_view(),name='plancreate'),
]