


import pandas as pd

class MapObject:
     def __init__(self,cityName, type):
          self.cityName = cityName
          self.type = type
     
     def returnDict(self):
          return {"city":self.cityName, "type":self.type} #[self.cityName, self.type]





""" def viv(name):
     try:
          #df = pd.read_csv("/home/hsyn722/atikutuphanesi/atikkutuphanesi/staticfiles/datas/"+name+".csv")
          df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi/staticfiles/datas/"+name+".csv")
                   
          dff = df.iloc[:,5:6].values
          list =[]

          city = []
          for i in dff:
               city.append(i[0])
          countnames = {}
          for name in city:
               countnames[name] = countnames.get(name, 0) + 1

          df_type = df.iloc[:,6:7].values
          type = []
          for i in df_type:
               type.append(i[0])
          counttype = {}
          for name in type:
               counttype[name] = counttype.get(name, 0) + 1
          
          list.append(counttype)
          list.append(countnames)

               
          return list
     except:
          return 

 
 """
def viv(name):

     
     df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi" + name)
     if "Tesis İli " not in df.columns:
          df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi" + name)

     if "Tesisi İli" in df.columns :
          df=df.rename(columns = {'Tesisi İli':'Tesis İli'})
          #df = pd.read_csv("/home/hsyn722/atikutuphanesi/atikkutuphanesi/staticfiles/datas/"+name+".csv")
          #df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi/staticfiles/datas/"+name+".csv")

     try:
          
         
          sıra_no = list()
          isletme_adi = list()
          tesis_ili = list()
          lisans_konulari = list()
          city_count = {}
          city_name = {}
     
          # sıra no
          for i in df["Sıra No"]:
               sıra_no.append(i)


          #işletme no
          for i in df["İşletme Adı"]:
               isletme_adi.append(i)

          #tesis ili
          for i in df["Tesis İli"]:
               tesis_ili.append(i)
          
          

          #lisans konulari
          for i in df["Lisans Konuları"]:
               lisans_konulari.append(i)
          print(lisans_konulari)
          for name in tesis_ili:
              
               city_count[name] = city_count.get(name, 0) + 1
               
               
               a = df.loc[df["Tesis İli"] == name]
               
               dict_ = {}
               
               for index, row in a.iterrows():
                    dict_[row["Lisans Konuları"]] =  row["İşletme Adı"]
               city_name[name] = dict_

              

          


          


          total_list = [sıra_no,isletme_adi,city_count,city_name,lisans_konulari]
          
         
          return total_list
          
     except:
          try:
               df = df = pd.read_csv("/Users/huseyinozdemir/Desktop/atikutuphanesi/atikkutuphanesi" + name,skiprows=1)
               if "Tesisi İli" in df.columns :
                   df=df.rename(columns = {'Tesisi İli':'Tesis İli'})
                  
               # second try ****************************
           
               

               sıra_no = list()
               isletme_adi = list()
               tesis_ili = list()
               lisans_konulari = list()
               city_count = {}
               city_name = {}
              

               # sıra no
               for i in df["Sıra No"]:
                    sıra_no.append(i)


               #işletme no
               for i in df["İşletme Adı"]:
                    isletme_adi.append(i)

               #tesis ili
               for i in df["Tesis İli"]:
                    tesis_ili.append(i)
              


               #lisans konulari
               for i in df["Lisans Konuları"]:
                    lisans_konulari.append(i)
               
               for name in tesis_ili:
                    city_count[name] = city_count.get(name, 0) + 1
                    
                    a = df.loc[df["Tesis İli"] == name]
               
                    dict_ = {}
               
                    for index, row in a.iterrows():
                         dict_[row["Lisans Konuları"]] =  row["İşletme Adı"]
                         city_name[name] = dict_
                    


               total_list = [sıra_no,isletme_adi,city_count,city_name,lisans_konulari]
              
             
               return total_list
               
          except:
               return
          
     




    

