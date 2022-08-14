

from django.db import models
""" class companies:
    def __init__(self,atikName,prosesFeatures,) -> None:
        self.atikName = atikName
        self.prosesFeatures = prosesFeatures
    def atikCodes(*args):
        atikCodeArray = []
        for i in args:
            atikCodeArray.append(i)
        return atikCodeArray

#1
metalMaden = companies("Metal madenciliği","proses özellikleri")
metalMadenciligiCodes = metalMaden.atikCodes(324324,32423,3424234,234)
metalMadenciligiCodes.pop(0)
#2 
digerMadenler = companies("Diğer madenler","proses özellikleri")
digerMadenlerCodes = digerMadenler.atikCodes(324324,32423,3424234,234)
digerMadenlerCodes.pop(0)
#3
tarım = companies("Tarım, hayvancılık, su ürünleri yetiştiriciliği, balıkçılık, ormancılık, bahçıvanlık atıkları","proses özellikleri")
tarımCodes = tarım.atikCodes(324324,32423,3424234,234)
tarımCodes.pop(0)
#4
imalatSanayi = companies("İmalat sanayi","proses özellikleri")
imalatSanayiCodes = imalatSanayi.atikCodes(324324,32423,3424234,234)
imalatSanayiCodes.pop(0)
#5
termikSantral = companies("Termik santral","proses özellikleri")
termikSantralCodes = termikSantral.atikCodes(324324,32423,3424234,234)
termikSantralCodes.pop(0)
#6
insaatAtiklari = companies("İnşaat atıkları","proses özellikleri")
insaatAtiklariCodes = insaatAtiklari.atikCodes(324324,32423,3424234,234)
insaatAtiklariCodes.pop(0)
#7
saglıkAtik = companies("Sağlık kuruluşu/Veteriner atıkları","proses özellikleri")
saglıkAtikCodes = saglıkAtik.atikCodes(324324,32423,3424234,234)
saglıkAtikCodes.pop(0)
#8
aritmaTesisi= companies("ArıtmaTesisi","proses özellikleri")
aritmaTesisiCodes = aritmaTesisi.atikCodes(324324,32423,3424234,234)
aritmaTesisiCodes.pop(0)
#9
atikYakma = companies("Atık yakma tesisi","proses özellikleri")
atikYakmaCodes = atikYakma.atikCodes(324324,32423,3424234,234)
atikYakmaCodes.pop(0)
#10
akuKazanim = companies("Akü geri kazanım tesisi","proses özellikleri")
akuKazanimCodes = akuKazanim.atikCodes(324324,32423,3424234,234)
akuKazanimCodes.pop(0)
#11
geriDonusum = companies("Geri dönüşüm ve diğerleri","proses özellikleri")
geriDonusumCodes = geriDonusum.atikCodes(324324,32423,3424234,234)
geriDonusumCodes.pop(0)
#12
egitimKurumlari = companies("Eğitim kurumları/Yurt atıkları","proses özellikleri")
egitimKurumlariCodes = egitimKurumlari.atikCodes(324324,32423,3424234,234)
egitimKurumlariCodes.pop(0)
#13
terminalAtik = companies("Terminallerde oluşan atıklar","proses özellikleri")
terminalAtikCodes = terminalAtik.atikCodes(324324,32423,3424234,234)
terminalAtikCodes.pop(0)
#14
evAtik = companies("Ev/Apartman/site atıkları","proses özellikleri")
evAtikCodes = evAtik.atikCodes(324324,32423,3424234,234)
evAtikCodes.pop(0)
#15
kamuKurum = companies("Kamu kurumu atıkları","proses özellikleri")
kamuKurumCodes = kamuKurum.atikCodes(324324,32423,3424234,234)
kamuKurumCodes.pop(0)
#16
limanIsletmeleri = companies("Liman işletmeleri","proses özellikleri")
limanIsletmeleriCodes = limanIsletmeleri.atikCodes(324324,32423,3424234,234)
limanIsletmeleriCodes.pop(0)
#17
alısVeris = companies("Alış-veriş merkezi/İş merkezi/Ticari plaza/Zincir market ","proses özellikleri")
alısVerisCodes = alısVeris.atikCodes(324324,32423,3424234,234)
alısVerisCodes.pop(0)
#18
akaryakit = companies("Akaryakıt istasyonu","proses özellikleri")
akaryakitCodes = akaryakit.atikCodes(324324,32423,3424234,234)
akaryakitCodes.pop(0)
#19
turistik = companies("Turistik tesis/Dinlenme tesisi/Restoranlar","proses özellikleri")
turistikCodes = turistik.atikCodes(324324,32423,3424234,234)
turistikCodes.pop(0)
#20
aracTamir = companies("Araç tamirhaneleri","proses özellikleri")
aracTamirCodes = aracTamir.atikCodes(324324,32423,3424234,234)
aracTamirCodes.pop(0)

objeler = ["",metalMaden,digerMadenler,tarım,imalatSanayi,termikSantral,insaatAtiklari,saglıkAtik,aritmaTesisi,atikYakma,akuKazanim,geriDonusum,egitimKurumlari,terminalAtik,evAtik,kamuKurum,limanIsletmeleri,alısVeris,akaryakit,turistik,aracTamir]
objeler2 = ["",metalMadenciligiCodes,digerMadenlerCodes,tarımCodes,imalatSanayiCodes,termikSantralCodes,insaatAtiklariCodes,saglıkAtikCodes,aritmaTesisiCodes,atikYakmaCodes,akuKazanimCodes,geriDonusumCodes,egitimKurumlariCodes,terminalAtikCodes,evAtikCodes,kamuKurumCodes,limanIsletmeleriCodes,alısVerisCodes,akaryakitCodes,turistikCodes,aracTamirCodes]










denedim = companies("bebek","efdfdf")
objee = [113,denedim]


class NavbarAtikListesi:
    def __init__(self) -> None:
 """        
class buttonPart(models.Model):
    mainName = models.CharField(max_length=100)
    prosesFeatures = models.TextField(max_length=1000)
    urlName = models.CharField(max_length=100)
    atikoneri = models.TextField(max_length=1000,default="")
    nace = models.TextField(max_length=1000,default="")
    files = models.FileField(default="")
    prosesKaynakli = models.TextField(max_length=1000,default="",help_text="aralarında nokta olacak sekilde ")
    proseskaynakliId = models.TextField(max_length=1000,default="",help_text="aralarında nokta olacak şekilde örn 34.553.")
    olusabilecek_diger = models.TextField(max_length=1000,default="",help_text="aralarında nokta olacak sekilde ")
    olusabilecek_digerId = models.TextField(max_length=1000,default="",help_text="aralarında nokta olacak şekilde örn 34.553.")
    
""" class prosesKaynaklıAtıklar(models.Model):
    upperMark = models.CharField(max_length=100,help_text="metalmadenciligi")
    selfMark = models.CharField(max_length=100,help_text="01-01-01")
    selfContent = models.TextField(max_length=350)
class olusabilecek_diger_atıklar(models.Model):
    upperMark = models.CharField(max_length=100,help_text="metalmadenciligi")
    selfMark = models.CharField(max_length=100,help_text="01-01-01")
    selfContent = models.TextField(max_length=350)
 """