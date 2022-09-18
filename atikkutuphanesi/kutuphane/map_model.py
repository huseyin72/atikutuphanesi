from django.db import models

class Map_file(models.Model):
     csv_file = models.FileField(help_text="csv",default="")
     csv_id = models.CharField(help_text="dropdownda bulunan id",default="",max_length=5)
     csv_mark = models.TextField(help_text="name of code",default="")
