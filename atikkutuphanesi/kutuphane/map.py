import csv
from os import execv
import pandas as pd
from sqlalchemy import null



def viv(name):
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

 
     


     


    

