


//atıklist sayfasını oluşturdum
const a = document.querySelector(".sectionBlocks");
const b = document.querySelector(".sectionMain");

listOfIds = ["atikpil","atikyag","ambalajatik","lastikatik","tehlikeliatik","biyobozunuratik","bitkiselatik","atikelektrik","tibbiatik"]
/* for(let i = 0; i<9; i++){
    let clone = a.cloneNode(true);
    b.appendChild(clone);      
} */
const c = document.querySelectorAll(".sectionBlocks");
c.forEach(function(element,index){
    
  element.setAttribute("id",listOfIds[index]);


});

atikpil = document.querySelector("#atikpil")



/* AOS.init(); */

// buton fonksiyonları 
codeAl = document.querySelectorAll(".codeAl");

const myUl1 = document.querySelector("#ul1");
const myUl2 = document.querySelector("#ul2");
const myUl3 = document.querySelector("#ul3");
const myUl4 = document.querySelector("#ul4");
const myUl5 = document.querySelector("#ul5");
const myUl6 = document.querySelector("#ul6");
const myUl7 = document.querySelector("#ul7");
const myUl8 = document.querySelector("#ul8");
const myUl9 = document.querySelector("#ul9");
/* codeAl.forEach(function(item){
    myUls.push(item);
}) */
var myUls = ["",
]
const buttonsS = document.querySelectorAll(".buttonAl");
const deneme = document.querySelector("#deneme")
//bütün buton içerikleri burda 
var buttonContent = [
                    ["16 06 01* - Kurşunlu piller ve akümülatörler","16 06 02* - Nikel kadmiyum piller","16 06 03*	- Cıva içeren piller","16 06 04 -	Alkali piller (16 06 03 hariç)","16 06 05	Diğer piller ve akümülatörler"],
                    ["20 01 33*	- 16 06 01, 16 06 02 veya 16 06 03'un altında geçen pil ve akümülatörler ve bu pilleri içeren sınıflandırılmamış karışık pil ve akümülatörler","20 01 34	20 01 33 dışındaki pil ve akümülatörler"],
                    ["08 03 19* -	Dağıtıcı yağ"],
                    ["12 01 06* -	Halojen içeren madeni bazlı işleme yağları (emülsiyon ve solüsyonlar hariç)","12 01 07* -	Halojen içermeyen madeni bazlı işleme yağları (emülsiyon ve solüsyonlar hariç)","12 01 10* -	Sentetik işleme yağları","12 01 12* -	Kullanılmış (mum) parafin ve yağlar"],
                    ["13 01 01* -	PCB (2) içeren hidrolik yağlar","13 01 09* -	Mineral esaslı klor içeren hidrolik yağlar","13 01 10* -	Mineral esaslı klor içermeyen hidrolik yağlar","13 01 11* -	Sentetik hidrolik yağlar","13 01 12* -	Kolayca biyolojik olarak bozunabilir hidrolik yağlar","13 01 13* -	Diğer hidrolik yağlar"],
                    ["13 02 04* -	Mineral esaslı klor içeren motor, şanzıman ve yağlama yağları","13 02 05* -	Mineral esaslı klor içermeyen motor, şanzıman ve yağlama yağları","13 02 06* -	Sentetik motor, şanzıman ve yağlama yağları","13 02 07* -	Kolayca biyolojik olarak bozunabilir motor, şanzıman ve yağlama yağları","13 02 08* -	Diğer motor, şanzıman ve yağlama yağları"],
                    ["13 03 01* -	PCB'ler içeren yalıtım ya da ısı iletim yağları","13 03 06* -	13 03 01 dışındaki mineral esaslı klor içeren yalıtım ve ısı iletim yağları","13 03 07* -	Mineral esaslı klor içermeyen ahtım ve ısı iletim yağları","13 03 08* -	Sentetik yalıtım ve ısı iletim yağları","13 03 09* -	Kolayca biyolojik olarak bozunabilir yalıtım ve ısı iletim yağları","13 03 10* -	Diğer yalıtım ve ısı iletim yağları"],
                    ["13 05 06* -	Yağ/su ayırıcılarından çıkan yağ "],
                    ["19 02 07* -	Ayrışmadan oluşan yağ ve konsantrasyonlar"],
                    ["19 08 10* -	19 08 09 dışındaki yağ ve su  ayrışmasından çıkan yağ karışımları ve gres"],
                    [""],
                    [""],
                    ["02 01 04 -	Atık lastikler (ambalajlar hariç)"],
                    ["16 01 03 -	Ömrünü tamamlamış lastikler"],
                    ["19 12 04 -	Plastik ve lastik"],
                    [""],
                    [""],
                    [""],
                    [""],
                    ["20 01 25 -	Yenilebilir sıvı ve katı yağlar","20 01 26* -	20 01 25 dışındaki sıvı ve katı yağlar"],
                    [""],
                    [""],
                    ["18 01 01 - Kesiciler (18 01 03 hariç)","18 01 02 - Kan torbaları ve kan yedekleri dahil vücut parçaları ve organları (18 01 03 hariç)","18 01 03* - Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olan atıklar","18 01 04	- Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olmayan atıklar (örneğin sargılar, vücut alçıları, tek kullanımlık giysiler, alt bezleri)","18 01 06* - Tehlikeli maddeler içeren ya da tehlikeli maddelerden oluşan kimyasallar","18 01 07 - 18 01 06 dışındaki kimyasallar","18 01 08* - Sitotoksik ve sitostatik ilaçlar","18 01 09 -	18 01 08 dışındaki ilaçlar","18 01 10* - Diş tedavisinden kaynaklanan amalgam atıkları"],
                    ["18 02 01 - Kesiciler (18 02 02 hariç)","18 02 02* - Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olan atıklar","18 02 03 - Enfeksiyonu önlemek amacı ile toplanmaları ve bertarafı özel işleme tabi olmayan atıklar","18 02 05* - Tehlikeli maddeler içeren ya da tehlikeli maddelerden oluşan kimyasallar","18 02 06 - 18 02 05 dışındaki kimyasallar","18 02 07* -	Sitotoksik ve sitostatik ilaçlar","18 02 08 -	18 02 07 dışındaki ilaçlar"],
                    
                
                
                ];


function changeFunc(){
    buttonsS.forEach(function(item,index){
        item.addEventListener("click",function(){
            console.log(item.className);
           
            
          /*   for(let i = 1; i<15; i++){
                if (item.id == i){
                    myUls[i].innerHTML = "";
                }
            }; */
            codeAl.forEach(function(list){
                list.style.display = "none";

            });
             // ul boşaltma 
            codeAl[index].innerHTML = "";
           




            //bütün butonları normale çevirir
            buttonsS.forEach(function(item2,){
                item2.classList.remove("buttonAlAfter")
            });
            // seçilen butonu çevirir 
            item.classList.add("buttonAlAfter");

            //içerik düzenleme
            buttonContent[index].forEach(function(item3){
                
                let createHr = document.createElement("hr");
                let createLi = document.createElement("li");
                let createA = document.createElement("a");
                createA.innerHTML = item3;
                createA.setAttribute("href","http://127.0.0.1:8000/atikkod/1");
                createLi.appendChild(createA);
                codeAl[index].style.display = "block"
                codeAl[index].appendChild(createLi);
                codeAl[index].appendChild(createHr);
                //href atatıgında indexin indexi yap href kullan 
                



            });
    
        })
    
    });
    

}
codeAl.forEach(function(item){
    item.style.display = "none";

});

function loadfunc(buttonContentIndex,parameter){
    
    buttonContentIndex.forEach(function(items,index){
        let createHr = document.createElement("hr");
        let createLi = document.createElement("li");
        let createA = document.createElement("a");
        createA.innerHTML = items;
        createA.setAttribute("href","www.google.com");
        createLi.appendChild(createA);
        codeAl[parameter].style.display = "block";
        codeAl[parameter].appendChild(createLi);
        codeAl[parameter].appendChild(createHr);

    })



};

loadfunc(buttonContent[0],0);
loadfunc(buttonContent[2],2);
loadfunc(buttonContent[10],10);
loadfunc(buttonContent[12],12);
loadfunc(buttonContent[15],15);
loadfunc(buttonContent[17],17);
loadfunc(buttonContent[19],19);
loadfunc(buttonContent[20],20);
loadfunc(buttonContent[22],22);

changeFunc();


/* function contentAtik(name,title,content){
    name = document.querySelector(`#${name}`)
    //title
    let titleOf = document.createElement("h2");
    titleOf.innerHTML = title;
    // content
    let contentOf = document.createElement("p");
    contentOf.innerHTML = content;

    name.appendChild(titleOf);
    name.appendChild(contentOf);
    


};
contentAtik("atikpil", atiklistObject.pilAtik.title,atiklistObject.pilAtik.content);
contentAtik("atikyag", atiklistObject.pilAtik.title,atiklistObject.pilAtik.content);
contentAtik("tibbiatik", atiklistObject.pilAtik.title,atiklistObject.pilAtik.content); */