



import code
from glob import glob
from urllib import response
from wsgiref.util import FileWrapper
from django import http
from django.conf import settings
from django.http import Http404, HttpResponse
from django.http import StreamingHttpResponse
from django.shortcuts import redirect, render
from django.contrib import messages
import os










from kutuphane.models import Atikcodes2
from kutuphane.atiktypesmodels import Atiktypes,firstSteps,secondSteps,thirdSteps
from . import models2

from kutuphane.models2 import buttonPart
from kutuphane.contact import contact
# atik listelerini burdan oluşturuyorum 

# Create your views here.
def home(request):
    return render(request,"home.html")
def index(request):
    return render(request,"index.html")

def works(request):
    return render(request,"works.html")

def about(request):
    return render(request,"about.html")

def atik_list(request,atikkind):
    #tıbbi atık 
    the_content = Atiktypes.objects.filter(urlname = atikkind)
    firstS = firstSteps.objects.filter(upperMark = atikkind)
    secondS = secondSteps.objects.all()
    thirdS = thirdSteps.objects.all()
    
    
    firstSset = []
    secondSset = []
    thirdSet = []

    theQueryA = []
    theQueryB = []

    # ilk dropdown sorgusu
    for k in firstS:
        firstSset1 = firstSteps()
        firstSset1.content = k.content
        firstSset1.upperMark = k.upperMark
        firstSset1.selfMark = k.selfMark
        firstSset.append(firstSset1)
        varB = k.selfMark
        theQueryA.append(varB)

    #ikinci dropdown sorgusu
    for l in secondS:
        if l.upperMark in theQueryA:
            secondSset1 = secondSteps()
            secondSset1.content = l.content
            secondSset1.upperMark = l.upperMark
            secondSset1.selfMark = l.selfMark
            secondSset.append(secondSset1)
            
            theQueryB.append(l.selfMark)
            
    for j in thirdS:
        if j.upperMark in theQueryB:
            thirdSet1 = thirdSteps()
            thirdSet1.content = j.content
            thirdSet1.upperMark = j.upperMark
            thirdSet1.selfMark = j.selfMark
            thirdSet1.href = j.href
            thirdSet.append(thirdSet1)

    
    data = Atiktypes()
    for i in the_content:
        data.urlname = i.urlname
        data.whatIsIt = i.whatIsIt
        data.whyİmportant = i.whyİmportant
        data.whereAccours = i.whereAccours
        data.howUnderstand = i.howUnderstand
        data.mainname = i.mainname
        #içeriği bitir

   
    

    for i in firstSset:
        print(i.content)
    
    return render(request,"atiklisttemplate.html",{"data":data,"firstStep":firstSset,"secondStep":secondSset,"thirdStep":thirdSet})
    """ if atikkind == "tibbiatik":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.tibbi_atik})
    #atık lastik 
    elif atikkind == "atiklastik":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.atik_lastik})
    #atık yağ
    elif atikkind == "atikyag":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.atik_yag})
    #atık pil ve ak 
    elif atikkind == "atikpil":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.atik_pil})
    #bitkisel atık yağ 
    elif atikkind == "bitkiselatikyag":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.bitkisel_yag})
    #biyobozunur atık 
    elif atikkind == "biyobozunuratik":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.biyobozunur_atik})
        #ambalaj atık
    elif atikkind == "ambalajatik":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.ambalaj_atik})
        #ATIK ELEKTRİKLİ
    elif atikkind == "atikelektrik":
        return render(request,"atiklisttemplate.html",{"tibbiatik":bannermodel.atik_elektrik})
     """


    

def atikcode(request,id):
    idCode = id
    codes = Atikcodes2.objects.filter( idNo = id)
    if codes:
        codess = Atikcodes2()
    for i in codes:
        codess.idNo = i.idNo
        codess.itsUpTitle = i.itsUpTitle
        codess. wasteName = i. wasteName
        codess.wasteType = i.wasteType
        codess.firstImage = i.firstImage
        codess.inBox = i.inBox
        codess.whereAccur = i.whereAccur
        codess.howDefine = i.howDefine
        codess.legislation1 = i.legislation1
        codess.legislation2 = i.legislation2
        codess.bioprocessability = i.bioprocessability
        codess.materialRecycling= i.materialRecycling
        codess.flammability = i.flammability
        codess.howReduce = i.howReduce
        codess.howAccumulate = i.howAccumulate
        codess.secondImage = i.secondImage
        codess.warningMessage = i.warningMessage
        codess.warningMessage2 = i.warningMessage2
        codess.file1 = i.file1
        codess.file2 = i.file2
        
        return render(request,"atikcode.html",{"data": codess,"mapId":idCode})
    return render(request,"atikcode.html",{"mapId":idCode})
    
   
   
    

    
    
    




def atik_uretimi(request,atikuretimi):
    filter = buttonPart.objects.filter(urlName = atikuretimi)
    theObject = buttonPart()
    for k in filter:   
        theObject.urlName = k.urlName
        theObject.prosesFeatures = k.prosesFeatures
        theObject.mainName = k.mainName
        theObject.atikoneri = k.atikoneri
        theObject.nace = k.nace
        theObject.files = k.files
        theObject.prosesKaynakli = k.prosesKaynakli.split(".")
        theObject.olusabilecek_diger = k.olusabilecek_diger.split(".")
        theObject.olusabilecek_digerId = k.olusabilecek_digerId.split(".")
        theObject.proseskaynakliId = k.proseskaynakliId.split(".")

    
    

   
    return render(request,"atikuretimi.html",{"data":theObject,})

def sektor(request, sektor):
    return HttpResponse("yönlendirme sayfası")


#download etme bölümü
def download(request,path):
   
    file_path = os.path.join(settings.MEDIA_ROOT,path)
    if os.path.exists(file_path):
        with open(file_path,"rb")as fh:
            response = HttpResponse(fh.read(),content_type = "applications/files")
            response["Content-Disposition"] = "inline;filename=" + os.path.basename(file_path)
            return response
    raise Http404










def contact1(request):
    print(request.method)
    
    if request.method == "POST":
        form = contact()
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        form.name = name
        form.email = email
        form.message = message
        form.save()
        
        
        messages.success(request,"Mesajınız başarıyla iletildi")
        return redirect("/contact")
   
    return render(request,"contact.html")





def map(request,id):
    id = str(id)
    from . import map
    mapTr = map.viv(id)
    if(mapTr):
        return render(request,"map.html",{"data":mapTr[1],"type":mapTr[0]})
    
    return render(request,"map.html",)
    

    

def sitemap(request):
    return render(request,"sitemap.xml")
 