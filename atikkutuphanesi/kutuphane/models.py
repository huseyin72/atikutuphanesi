
from pickle import TRUE
from django.db import models


# Create your models here.
""" class Atikcodes(models.Model):
    idNo = models.CharField(max_length=10, help_text="örn. 3",default="")
    itsUpTitle = models.TextField(max_length=70,null=True, help_text="örn. Tıbbi atık",name="Ait oldugu atık türü",default="")
    wasteName = models.CharField(max_length=70,null=True,name="Atık ismi",default="")
    wasteType = models.CharField(max_length=20,null=True, help_text="tehlikeli = 1, tehlikesiz = 2, uygun kodu seçiniz.",name="Uygun kodu seçiniz",default="")
    firstImage = models.ImageField(null=TRUE,default="") 
    inBox = models.TextField(max_length=700,null=TRUE,help_text="uyarı yazısı",default="")
    whereAccur = models.TextField(max_length=700,null=TRUE,help_text="bu koda sahip atıklar nerde oluşur?",default="")
    howDefine =  models.TextField(max_length=700,null=TRUE,help_text="Bu koda sahip atıkları nasıl tanımlarız?")
    legislation1 =  models.TextField(max_length=100,null=TRUE,help_text="Bu atık hangi mevzuatla ilişkilidir(1)",default="")
    legislation2 =  models.TextField(max_length=100,null=TRUE,help_text="Bu atık hangi mevzuatla ilişkilidir(2)",default="")
    #atığın özellikleri bölümü 
    bioprocessability = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    materialRecycling = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    flammability = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    howReduce =models.TextField(max_length=700,null=TRUE,help_text="Bu atık nasıl kaynağında azaltılabilir?",default="")
    howAccumulate =models.TextField(max_length=700,null=TRUE,help_text="Bu atık nasıl kaynağında azaltılabilir?",default="")
    secondImage = models.ImageField(null=TRUE,default="")
    warningMessage = models.TextField(max_length=700,null=TRUE,help_text="uyarı mesajı(1)",default="")
    warningMessage2 = models.TextField(max_length=700,null=TRUE,help_text="uyarı mesajı(2)",default="")
    file1 = models.FileField(null=TRUE,help_text="Bu atık; atık tesisine nasıl taşınmalıdır ?",default="")
    file2 = models.FileField(null=TRUE,help_text="Bu atık; atık tesisine nasıl taşınmalıdır ?",default="")
 """
class Atikcodes2(models.Model):
    idNo = models.CharField(max_length=10, help_text="örn. 3",default="")
    itsUpTitle = models.TextField(max_length=70,null=True, help_text="örn. Tıbbi atık",default="")
    wasteName = models.CharField(max_length=70,null=True,default="")
    wasteType = models.CharField(max_length=20,null=True, help_text="tehlikeli = 1, tehlikesiz = 2, uygun kodu seçiniz.",default="")
    firstImage = models.ImageField(null=TRUE,default="") 
    inBox = models.TextField(max_length=700,null=TRUE,help_text="uyarı yazısı",default="")
    whereAccur = models.TextField(max_length=700,null=TRUE,help_text="bu koda sahip atıklar nerde oluşur?",default="")
    howDefine =  models.TextField(max_length=700,null=TRUE,help_text="Bu koda sahip atıkları nasıl tanımlarız?")
    legislation1 =  models.TextField(max_length=100,null=TRUE,help_text="Bu atık hangi mevzuatla ilişkilidir(1)",default="")
    legislation2 =  models.TextField(max_length=100,null=TRUE,help_text="Bu atık hangi mevzuatla ilişkilidir(2)",default="")
    #atığın özellikleri bölümü 
    bioprocessability = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    materialRecycling = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    flammability = models.CharField(max_length=10,null=True, help_text="0-5 arası bir değerle puanlandırın",default="")
    howReduce =models.TextField(max_length=700,null=TRUE,help_text="Bu atık nasıl kaynağında azaltılabilir?",default="")
    howAccumulate =models.TextField(max_length=700,null=TRUE,help_text="Bu atık nasıl kaynağında azaltılabilir?",default="")
    secondImage = models.ImageField(null=TRUE,default="",)
    warningMessage = models.TextField(max_length=700,null=TRUE,help_text="uyarı mesajı(1)",default="")
    warningMessage2 = models.TextField(max_length=700,null=TRUE,help_text="uyarı mesajı(2)",default="")
    file1 = models.FileField(null=TRUE,help_text="Bu atık; atık tesisine nasıl taşınmalıdır ?",default="")
    file2 = models.FileField(null=TRUE,help_text="Bu atık; atık tesisine nasıl taşınmalıdır ?",default="")

    
    """ itsId = models.CharField(max_length=10,null=True)
    itsType = models.CharField(max_length=50, null=True)
    itsTtile = models.CharField(max_length=15, null=True)
    img = models.ImageField( null=True)
    warningContent = models.TextField(max_length=500, null=True)
    whereAccoursContent = models.TextField(max_length=500, null=True)
    howDefineContent = models.TextField(max_length=500, null=True)
    legislationlistContent = models.TextField(max_length=500, null=True)
    howToReduceContent = models.TextField(max_length=500, null=True)
    img2 =  models.ImageField( null=True)
    p1 = models.TextField(max_length=400, null=True)
    p2 = models.TextField(max_length=400, null=True)
    list1 = models.CharField(max_length=50, null=True)
    list2 = models.CharField(max_length=50, null=True)
 """







   
    
    
    



