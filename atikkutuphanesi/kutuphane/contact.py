
from django.db import models


class contact(models.Model):
     name = models.CharField(max_length=50)
     email = models.EmailField(max_length=50)
     message = models.TextField(max_length=2000)
