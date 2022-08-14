/* const drop = document.querySelector(".atik"); */
/* const navDrop = document.querySelector(".navDrop"); */
/* const li1 = document.querySelector(".li1"); */
var atikList = ["Atık pil ve akü" , "Atık yağ",  "Ambalaj atıkları", "Atık lastik" , "Tehlikeli atık" , "Biyobozunur atık" , "Bitkisel atık yağ" , "Atık elektrikli elektronik aletler" , "Tıbbi atık"];
var atikhref = ["/atiklist#atikpil","/atiklist#atikyag","/sectionpart/atiklist.html#ambalajatik","/sectionpart/atiklist.html#yağatik","/sectionpart/atiklist.html#pilatik","/sectionpart/atiklist.html#elektronikatik","/sectionpart/atiklist.html#bitkiselatik","/sectionpart/atiklist.html#biyobozunuratik","http://127.0.0.1:8000/atiklist/tibbiatik"]
const ul = document.querySelector(".associate");
const clickable = document.querySelector(".clickable");



// atık listesi
function atikAdd(){
    atikList.forEach(function(item, index){
        const newLi = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href",atikhref[index]);
        a.setAttribute("class","atiklist");
        a.innerText=item;
        newLi.appendChild(a);
        ul.appendChild(newLi);
        
        

    })
}


navSlide = () =>{
    
    

};
atikAdd();

/* clickable.addEventListener("click", (e)=>{
    if(ul.classList.contains("init")){
        ul.classList.remove("init");
        ul.classList.add("second");
        atikAdd();
        
        
       
    }
    else if(ul.classList.contains("second")){
        ul.innerHTML="";
        ul.classList.remove("second");
        ul.classList.add("init");
        
        
        }
    e.preventDefault();
        
    }

   
    


    );

 */


//responsive taşıma 
/* const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".ul");
    const navLinks = document.querySelectorAll(".ul li");
    
    burger.addEventListener("click",()=>{
      nav.classList.toggle("nav-activate");
      navLinks.forEach((link,index)=>{
      
        link.style.animation=`navLinkFade 0.5s ease forwards`;
     // console.log(index/7);
    });
      
    });
    
     
    
      
  };
  */
 /*  console.log(drop.style)
  
  
  // about hove
 
function hoverFunc(drom){
    drop.addEventListener("click",function(){
        navDrop.classList.toggle("toggle");
        li1.classList.toggle("liHoverBack");

        
  
    })
   
    
} */

/* function textDecoration(item){
    item.addEventListener("click",function(e){
        a1.forEach(function(remove){
            remove.classList.remove("liHoverBack");
            console.log(e.target);

            
        })
        
       
        
        e.target.classList.toggle("liHoverBack");

        


    });
} */
/* navSlide();
atikAdd(); */
/* navSlide(); */
/* hoverFunc();
textDecoration(ul2) */


/* 
$(document).ready(function(){
    console.log("none")
$("#dropDownLi").hover(function(){
    $("#deneme").css("display", "flex");
    }, function(){
    $("#deneme").css("display","none");
    });
}); */
const deneme = document.querySelector("#blue");
const buttonDrop = document.querySelector("#dropDownLi");
const arrow = document.querySelector("#arrow");
buttonDrop.addEventListener("click", (e)=>{
    if (blue.style.display == "flex"){
        blue.style.transition=`  3s ease-out;`;
        blue.style.display = "none";
        arrow.className = "fa-solid fa-caret-down"

    }
    else{
        blue.style.display = "flex"
        arrow.className = "fa-solid fa-caret-up"




    }
    e.preventDefault();

})