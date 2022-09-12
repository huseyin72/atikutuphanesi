from django.db import models

class Atiktypes(models.Model):
     urlname = models.CharField(max_length=50)
     whatIsIt = models.TextField(max_length=3000)
     whyİmportant =  models.TextField(max_length=3000)
     whereAccours =  models.TextField(max_length=3000)
     howUnderstand =  models.TextField(max_length=3000)
     mainname = models.CharField(max_length=50)
     
     


""" class AtiktypesCodes(models.Model):
     urlName = models.CharField(max_length=50,help_text="ait olduğu atık türü")
     itsMaintitle = models.CharField(max_length=100,help_text="atık türünün ana başlığı örn 04 some text")
     itsMiddleTitle = models.CharField(max_length=100,help_text="atık türünün orta başlığı örn. 04.42 some text")
     itself = models.CharField(max_length=100,help_text="atık türünün alt başlığı örn. 04.02.01 some text") """
# burda her basamak için bir class olusturacam ve her class da bir mark olacak 
class firstSteps(models.Model):
     upperMark = models.CharField(max_length=50,help_text="örn. tıbbi atık")
     content = models.TextField(max_length=200)
     selfMark = models.CharField(max_length=50,help_text="örn. 04")

class secondSteps(models.Model):
     upperMark = models.CharField(max_length=50,help_text="örn. 04")
     content = models.TextField(max_length=200)
     selfMark = models.CharField(max_length=50,help_text="örn. 04-01")

class thirdSteps(models.Model):
     upperMark = models.CharField(max_length=50,help_text="örn. 04-01")
     content = models.TextField(max_length=300)
     selfMark = models.CharField(max_length=50,help_text="örn. 04-01-01")
     href = models.CharField(max_length=100,default="")


     

