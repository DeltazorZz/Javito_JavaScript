window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}
function ß(elem){
    return document.querySelector(elem);
}

function Class(elem){
    return document.getElementsByClassName(elem);
}

function init(){
beolvas();
    
}

const filmek= [];

function beolvas(){
    let fajl = "json.json";
    JSON.stringify
    console.log(fajl);
fetch(fajl)
    .then((res) => res.json())
	.then((data) => {
	console.log(data);
	
		console.log(data.filmek), 

            
            data.filmek.forEach((elem) => {
                filmek.push(elem);
            });
            adatfeldolgoz(filmek);
            megjelenit(filmek);
        })
	.catch((err) => {
            console.log(err);
        })
           
};




function adatfeldolgoz(tomb) {
    console.log(tomb)
    let txt=""
    for (let i = 0; i < tomb.length; i++) {
        txt += "<div>"
        txt += `<h1>${tomb[i].filmcim}</h1>`
        txt += `<img src=${tomb[i].plakat}>`
        txt += `<h2>${tomb[i].kiadas}</h2>`
        txt += `<p>${tomb[i].ismerteto}</p>`
        txt += "</div>"
    }
    ID("content").innerHTML = txt;
      
}
function megjelenit(tomb){
    let txt="<table>";
    tomb.forEach(function(filmek,index){
        txt+="<tr id="+index+" >";
        for (const key in filmek){
            txt+="<td>";
            txt+=filmek[key];
            txt+="</td>";
        }
        txt+="</tr>";
    });
    txt += "</table>";
    ID("filmekoldal").innerHTML = txt;
}