import pandas as pd 

mainDict = {"Geri Kazanım":["Tehlikeli Atık geri Kazanımı","Tehlikesiz Atık Geri Kazanımı","Atık Yağ Geri Kazanımı","Bitkisel Atık Yağ Geri Kazanımı","Atık pil ve akümülatör geri kazanımı","Ömrünü tamamlamış lastik geri kazanımı","Ambalaj atığı geri kazanımı"],
    "Bertaraf": ["Atık yakma ve beraber yakma ","Düzenli Depolama – 1.Sınıf (Tehlikeli Atık Düzenli Depolama","Düzenli depolama – 2.sınıf (belediye atıkları ve tehlikesiz atık düzenli depolama)","Düzenli depolama – 3.sınıf (inert atık düzenli depolama)"],
    "Ön işleme": ["Tıbbi atık sterilizasyon","Ömrünü tamamlamış araç geçici depolama" ,"Tanker temizleme","4.Hurda metal/ ÖTA işleme","Atık kabul tesisi","Atık elektrikli ve elektronik eşya işleme","Atıktan türetilmiş yakıt (ATY) hazırlama tesisi"],
    "Arındırma":["PCB arındırma "],
    "Ara depolama":["Atık ara depolama","Atık ara depolam","Bitkisel atık yağ ara depolama tesisi"],
    "Biyobozunur atık işleme":["Biyobozunur atık işleme –Mekanik ayırma","Biyobozunur atık işleme –","Biyobozunur atık işleme – Biyometanizasyon","Biyobozunur atık işleme – Kompost"],
    "Diğer atık yönetim faaliyetleri": ["Maden Atığı Bertaraf- Depolama Kategori","Maden Atığı Bertaraf- Depolama Kategori A,Maden Atığı Bertaraf- Depolama Kategori B","Maden Atığı Bertaraf- Depolama Kategori B","Atık yağ rafinasyonu","Atık yağ transfer noktası","Tehlikeli atık ön işlem tesisleri","Tehlikesiz atık ön işlem tesisleri","Yeniden kullanıma hazırlama"],
    "Toplma ayırma":["Toplama ayırma tesisi","Toplama ayırma tesisi tip 1","Toplama ayırma tesisi tip 2","Toplama ayırma tesisi tip 3","Ambalaj atığı toplama ve ayırma tip 1","Ambalaj atığı toplama ve ayırma tip 2","Ambalaj atığı toplama ve ayırma tip 3",]

}





class MapObject:
     def __init__(self,cityName):
          self.cityName = cityName
          self.set = set()
          self.type = type
          self.array = list()
          self.result = {"city":self.cityName, "subjects":{},"appeared":self.array}
          
          #subjects:{se}
     def set_appeared(self, theSubject): 
        self.set.add(theSubject)
        
     

     def updateResult(self,theSubject):
        self.result["subjects"][theSubject] = self.result["subjects"][theSubject] + 1 
        
     def setResult(self,theSubject):
         self.result["subjects"][theSubject] = 1
     def getCity(self):
         return self.result["city"]
     
     def returnResult(self):
         a = {"city":self.result["city"], "subjects":self.result["subjects"]}
         return a
     def returnResult2(self):
         a = {"city":self.result["city"], "subjects":self.result["appeared"]}
         return a
     def getAppeared(self):
        return self.result["appeared"]
     def setToArray(self):
        for i in self.set:
            self.array.append(i)
     def getSet(self):
        print(self.set)

        
    
     #def returnDict(self):
          #return {"city":self.cityName, "type":self.type} 


def viv(name):
    df = pd.read_csv("../atikkutuphanesi" + name)
    if "Lisans Konuları" not in df.columns:
        df = pd.read_csv("../atikkutuphanesi" + name,skiprows=1)
    if "Tesisi İli" in df.columns :
        df=df.rename(columns = {'Tesisi İli':'Tesis İli'})
    
    #cities = ["ankara","istanbul","bursa","istanbul","bursa","batman","batman","istanbul"]
    cityCursor = []

    result = []

    for ind in df.index:
        if df["Tesis İli"][ind] not in cityCursor:

            cityCursor.append(df["Tesis İli"][ind])
            
            theObj = MapObject(df["Tesis İli"][ind])
            
            if (df["Lisans Konuları"][ind] not in theObj.returnResult()["subjects"].keys()):
                for key in mainDict:
                    values = mainDict[key]
                    for value in values:
                       
                        ourString = str(df["Lisans Konuları"][ind])
                        
                        
                       
                        if ourString.strip() == value.title():
                            
                            theObj.set_appeared(key)
            
                theObj.setResult(df["Lisans Konuları"][ind])
                result.append(theObj)
            else:

                theObj.updateResult(df["Lisans Konuları"][ind])
                result.append(theObj)
            
        else:
            
            for j in result:
                if j.returnResult()["city"] == df["Tesis İli"][ind]:
                    
                    
                    
                    if (df["Lisans Konuları"][ind] not in j.returnResult()["subjects"].keys()):
                        
                        for key in mainDict:
                            values = mainDict[key]
                            for value in values:
                                if df["Lisans Konuları"][ind] == value.title():
                                    j.set_appeared(key)
                                    
                        
                        j.setResult(df["Lisans Konuları"][ind])
                    else:
                        for key in mainDict:
                            values = mainDict[key]
                            for value in values:
                                if df["Lisans Konuları"][ind] == value.title():
                                    j.set_appeared(key)
                                    
                        
                        j.updateResult(df["Lisans Konuları"][ind])
                        
    for i in result:
        i.setToArray() 
        i.getSet()
        print(i.returnResult())

                     
    

    
   
    return result


