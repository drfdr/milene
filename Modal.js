var ModalContainer = document.getElementById("ModalContainer");
var ModalTitle = document.getElementById("ModalTitle");
var CloseModal = document.getElementById("CloseModal");

var Kler = document.getElementById("Kler");
var Legiony = document.getElementById("Legiony");

var ModalTrailer = document.getElementById("ModalTrailer");

var ModalIMG = document.getElementsByClassName("ModalIMG");
var ModalIMGContainer = document.getElementsByClassName("ModalIMGContainer");

var HTML = document.getElementsByTagName("html")[0];

var BodyX = document.getElementById("BodyX");


Legiony.onclick = function () {
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "Legiony (2019)";
    

    ModalTrailer.src="https://www.youtube.com/embed/qFjZu2TS1LA";
    
    ModalIMG[0].src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/09/legiony-recenzja-film-1180x541.jpg";
    ModalIMG[1].src="https://static.antyweb.pl/wp-content/uploads/2019/06/27111016/13-1420x670.jpg";
    ModalIMG[2].src="https://ssl-gfx.filmweb.pl/ph/34/37/823437/821821_1.1.jpg";
    ModalIMG[3].src="https://ocdn.eu/pulscms-transforms/1/cIOk9kpTURBXy8wMGJlNDFkZTRjMzJkMzUwNzJhYTJhYzgwYjliYmM4MS5qcGeUlQMAAM0FMc0C7JMFzQMUzQG8lQfZMi9wdWxzY21zL01EQV8vMjMzN2M5ZmQ2YjkzMWVlNmNiMGQyM2RjYmEyNThhOWQucG5nAMIAkwmmOTRkMzBjBoGhMAE/legiony-kadr-z-filmu.jpg";
    ModalIMG[4].src="https://www.gazetapolska.pl/uploads/styles/node-still/public/foto/8030285449511.jpg?itok=1E1_iQRG";
    ModalIMGContainer[5].style.display="none";

}

Kler.onclick = function(){
   Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "Kler (2019)";
    
    ModalTrailer.src="https://www.youtube.com/embed/N9Asxqvr2m8";
    
    ModalIMG[0].src="https://ocdn.eu/pulscms-transforms/1/GudktkqTURBXy81M2Q0MzEyMDYxOTYxY2UwYzM0OWZmODcwNTUxMjFkMC5qcGVnkZMFzQQAzQI_";
   ModalIMG[1].src="https://i.wpimg.pl/O/644x429/d.wpimg.pl/1316662600--372453628/kler.jpg";
    ModalIMG[2].src="https://d-art.ppstatic.pl/kadry/k/r/1/82/00/5baf948542249_o_large.jpg";
 ModalIMG[3].src="https://cdn.natemat.pl/300b2f501826d043cc02013572ced47d,780,0,0,0.jpg";
    ModalIMG[4].src="https://ssl-gfx.filmweb.pl/ph/04/02/810402/776155.1.jpg";
    ModalIMGContainer[5].style.display="none";

}


Miss.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "Miss";
    
    ModalTrailer.display="none";
    
    ModalIMG[0].src="https://milenajaroszek.files.wordpress.com/2016/03/13645189_681468778673982_2565973695546808438_n.jpg?w=262&h=175";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
    ModalIMG[6].src="";
}

Polandja.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

Faustus.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

BedzieLepiej.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

Duszno.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

Wolyn.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

Karbala.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="";
    ModalIMG[1].src="";
    ModalIMG[2].src="";
    ModalIMG[3].src="";
    ModalIMG[4].src="";
    ModalIMG[5].src="";
}

Miasto.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "Miasto 44";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-52-58.png";
    ModalIMG[1].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-53-24.png";
    ModalIMG[2].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-53-43.png";
    ModalIMG[3].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-54-29.png";
    ModalIMG[4].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-55-30.png";
    ModalIMGContainer[5].style.display="none";
}

Hiszpanka.onclick = function(){
    Hide();
    ModalContainer.style.display="block";
    ModalTitle.textContent = "Hiszpanka";
    
    ModalTrailer.src="https://www.youtube.com/embed/";
    
    ModalIMG[0].src="https://milenajaroszek.files.wordpress.com/2016/03/10-1-0-0-01-00-0001-0-1-o-jpg505007.jpg";
    ModalIMG[1].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-00-34.png";
    ModalIMG[2].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-00-12.png";
    ModalIMG[3].src="https://milenajaroszek.files.wordpress.com/2016/03/fotohiszpanka_fb_d_0049.jpg";
    ModalIMG[4].src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-01-17.png";
    ModalIMGContainer[5].style.display="none";
}


CloseModal.onclick = function(){
    HTML.style.overflow = "scroll";
    ModalContainer.style.display="none";
    BodyX.style.opacity ="1";
}

function Hide(){
     HTML.style.overflow = "hidden";
    BodyX.style.opacity ="0.19";

}

