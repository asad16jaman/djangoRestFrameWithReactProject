from django.db import models

# Create your models here.

class Plan(models.Model):
    plan = models.CharField(max_length=250)
