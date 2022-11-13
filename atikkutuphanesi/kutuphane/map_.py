import pandas as pd 



# Online Python - IDE, Editor, Compiler, Interpreter



class MapObject:
     def __init__(self,cityName):
          self.cityName = cityName
          self.type = type
          self.result = {"city":self.cityName, "subjects":{}}
     
     def updateResult(self,theSubject):
        self.result["subjects"][theSubject] = self.result["subjects"][theSubject] + 1 
     def setResult(self,theSubject):
         self.result["subjects"][theSubject] = 1
     def getCity(self):
         return self.result["city"]
     
     def returnResult(self):
         a = self.result
         return a
     #def returnDict(self):
          #return {"city":self.cityName, "type":self.type} 


def viv(name):
    df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi" + name)
    if "Lisans Konuları" not in df.columns:
        df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi" + name,skiprows=1)
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
            
                theObj.setResult(df["Lisans Konuları"][ind])
                result.append(theObj)
            else:

                theObj.updateResult(df["Lisans Konuları"][ind])
                result.append(theObj)
            
        else:
            
            for j in result:
                if j.returnResult()["city"] == df["Tesis İli"][ind]:
                    
                    
                    
                    if (df["Lisans Konuları"][ind] not in j.returnResult()["subjects"].keys()):
                        
                        
                        
                        j.setResult(df["Lisans Konuları"][ind])
                    else:
                        j.updateResult(df["Lisans Konuları"][ind])
                        

    return result


