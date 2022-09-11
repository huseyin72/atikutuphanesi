
from django.contrib import admin
from django.urls import path,include,re_path as url
from django.conf import settings
from django.conf.urls.static import static
from . import views

from django.views.static import serve



urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home,name='home'),
    path('wastenavigation/', views.index,name="index"),
    path('works/', views.works,name="works"),
    path('about/', views.about,name="about"),
    path('atiklist/<str:atikkind>', views.atik_list,name="atiklist"),
    path('atikkod/<int:id>', views.atikcode,name="atikcode"),
    path('atikuretimi/<str:atikuretimi>', views.atik_uretimi,name="atik_uretimi"),
    path('sektor/<str:sektor>', views.sektor ,name="atik_uretimi"), #sektör yönlendirme sayfası 
    path('sitemap/', views.sitemap,name="sitemap"),
    path('atikkod/<int:id>/map/', views.map,name=""),
    
   
     
    path('contact', views.contact1, name="contact")
   
    

]
