const select1 = document.querySelector("#biyobozunurSelectOne");
const select2 = document.querySelector("#biyobozunurSelectTwo");

var zeroTwo = ["02 01 Tarım, Bahçıvanlık, Su Ürünleri Üretimi, Ormancılık, Avcılık ve Balıkçılıktan Kaynaklanan Atıklar","02 02  Et, balık ve diğer hayvansal kökenli gıda maddelerinin hazırlanmasından ve işlenmesinden kaynaklanan atıklar","02 03  Meyve, sebze, tahıl, yenilebilir yağlar, kakao, kahve, çay ve tütünün hazırlanmasından ve işlenmesinden; konserve üretiminden, maya ve maya özütü üretiminden, melas hazırlanması ve fermantasyonundan kaynaklanan atıklar","02 04  Şeker üretiminden kaynaklanan atıklar","02 05 Süt ürünleri endüstrisinden kaynaklanan atıklar","02 06  Unlu mamuller ve şekerleme endüstrisinden kaynaklanan atıklar","02 07  Alkollü ve alkolsüz içeceklerin (kahve, çay ve kakao hariç) üretiminden kaynaklanan atıklar"]
var zeroThree = ["03 01 Ağaç İşlemeden ve Sunta ve Mobilya Üretiminden Kaynaklanan Atıklar","03 03  Kağıt hamuru, kağıt ve kağıt karton üretim ve işlenmesinden kaynaklanan atıklar"]

dropFunction = () =>{
     select1.addEventListener("change",() => {
         

          if(select1.value == "02"){
               zeroTwo.forEach((item) => {
                    create(item,select2);

               
               })
          }
          else if(select1.value == "03"){
               zeroThree.forEach((item) =>{
                    create(item,select2)
               })
               

          }
          

     })
     

}

dropFunction();



// create function
create = (item,select) =>{
     select2.innerHTML = "";
     let myOption = document.createElement("option");
     myOption.innerHTML = item;
     select.appendChild(myOption);
}