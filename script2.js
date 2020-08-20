let NomeRepositorio = JSON.parse(localStorage.getItem("nome"))

let xhr = new XMLHttpRequest();
let url = "https://api.github.com/repos/CamilaGodoy1509/" + NomeRepositorio;

xhr.open("GET", url, false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        
            document.getElementById('div2').innerHTML += "<div id='div3'> Nome </div><div>"  + obj.owner.login + "</div><div> <img id='img-div' src='"+ obj.owner.avatar_url + "'></div><div id='div3'>Nome do Repositório </div><div>" + NomeRepositorio + "</div><div id='div3'>Descrição </div><div>" + obj.description + "</div>" 
               
    }

    

}

xhr.send()


//Following
let url2 = "https://api.github.com/users/CamilaGodoy1509/following";

xhr.open("GET", url2, false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        document.getElementById('div2').innerHTML += "<div id='div3'>Seguindo </div>" + obj.length +" usuários </div>"
               
    }

    

}

xhr.send()

//Commits
let url3 = "https://api.github.com/repos/CamilaGodoy1509/" + NomeRepositorio +"/commits";

xhr.open("GET", url3, false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        document.getElementById('div2').innerHTML += "<div id='div3'>Commits</div>"

        for (let i = 0; i < obj.length; i++) {
        
        document.getElementById('div2').innerHTML +=  obj[i].commit.message + "<br>"
        }  

       
    }

    

}

xhr.send()

//Branches
let url4 = "https://api.github.com/repos/CamilaGodoy1509/" + NomeRepositorio +"/branches";

xhr.open("GET", url4, false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        document.getElementById('div2').innerHTML += "<div id='div3'>Branches</div>"

        for (let i = 0; i < obj.length; i++) {
        
        document.getElementById('div2').innerHTML +=  obj[i].name + "<br>"
        }  

       
    }

    

}

xhr.send()

//Languages
let url5 = "https://api.github.com/repos/CamilaGodoy1509/" + NomeRepositorio +"/languages";

xhr.open("GET", url5, false);

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        let dadosJSONText = xhr.responseText
        let obj = JSON.parse(dadosJSONText)

        document.getElementById('div2').innerHTML += "<div id='div3'>Languages</div>"

        for (prop in obj) {
        
        document.getElementById('div2').innerHTML +=  prop + "<br>"
        }  

       
    }

    

}

xhr.send()





























//https://api.github.com/repos/MatheusVal/REPOSITORIO/languages
