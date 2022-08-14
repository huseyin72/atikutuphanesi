var buttonAs = document.querySelectorAll(".button-main  a");
var links = ["atikuretimi/"] // linkleri copmanylere burda atıyoruz
function takeHrefs(){
    i = 1;
    buttonAs.forEach(function(item,index){
        item.setAttribute("href",`${links + i}`);
        ++i;

    });
}
takeHrefs();

