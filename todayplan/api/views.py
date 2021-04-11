from django.shortcuts import render
from rest_framework.generics import CreateAPIView,ListAPIView,DestroyAPIView
from .models import Plan
from .serializer import PlanSerializer


# Create your views here.


class ListPlan(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class PlanCreate(CreateAPIView):

    queryset = Plan.objects.all()
    serializer_class = PlanSerializer


class DistroyPlan(DestroyAPIView):

    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

