var barcontainer = document.getElementsByClassName("barcontainer")[0];
var menu = document.getElementsByClassName("menu")[0];

   barcontainer.classList.toggle("change");

barcontainer.onclick = function(){
   barcontainer.classList.toggle("change");
   menu.classList.toggle("hide");
}




	


     
	var bkontakt = document.getElementById("kontakt");
	var okontakt = document.getElementById("aboutme");
	var kontaktdata = document.getElementById("kontaktdata");
	var socialcontainer = document.getElementById("socialcontainer");
	var bfilmy = document.getElementById("bfilmy");
	var ofilmy = document.getElementById("filmy");
     var bseriale = document.getElementById("bseriale");
	var oseriale = document.getElementById("seriale");
	var bteledyski = document.getElementById("bteledyski");
	var oteledyski = document.getElementById("teledyski");
	var breklamy = document.getElementById("breklam");
	var oreklamy = document.getElementById("reklam");


        ofilmy.style.display = "inline-block";
		oseriale.style.display="none";
		oteledyski.style.display="none";
		oreklamy.style.display="none";
		okontakt.style.display="none";
        bfilmy.style.color="gray";
  


    bfilmy.onclick = function () {
        ofilmy.style.display = "inline-block";
		oseriale.style.display="none";
		oteledyski.style.display="none";
		oreklamy.style.display="none";
		okontakt.style.display="none";
        bfilmy.style.color="gray";
        bseriale.style.color="black";
        bteledyski.style.color="black";
        breklamy.style.color="black";
        bkontakt.style.color="black";
        barcontainer.classList.toggle("change");
        menu.classList.toggle("hide");
          
    }
    
  bseriale.onclick = function() {
        oseriale.style.display="block";
        ofilmy.style.display = "none";
		oteledyski.style.display="none";
		oreklamy.style.display="none";
		okontakt.style.display="none";
        bfilmy.style.color="black";
        bseriale.style.color="gray";
        bteledyski.style.color="black";
        breklamy.style.color="black";
        bkontakt.style.color="black";
      barcontainer.classList.toggle("change");
        menu.classList.toggle("hide");
    }
    
   bteledyski.onclick=function(){
        oteledyski.style.display="block";
        ofilmy.style.display = "none";
		oseriale.style.display="none";
		oreklamy.style.display="none";
		okontakt.style.display="none";
        bfilmy.style.color="black";
        bseriale.style.color="black";
        bteledyski.style.color="gray";
        breklamy.style.color="black";
        bkontakt.style.color="black";
       barcontainer.classList.toggle("change");
        menu.classList.toggle("hide");
    }
   
   breklamy.onclick=function(){
        oreklamy.style.display="block";
		ofilmy.style.display = "none";
		oseriale.style.display="none";
		oteledyski.style.display="none";
		okontakt.style.display="none";
        bfilmy.style.color="black";
        bseriale.style.color="black";
        bteledyski.style.color="black";
        breklamy.style.color="gray";
        bkontakt.style.color="black";
       barcontainer.classList.toggle("change");
        menu.classList.toggle("hide");
   }
	
   bkontakt.onclick = function(){

		ofilmy.style.display = "none";
		oseriale.style.display="none";
		oteledyski.style.display="none";
		oreklamy.style.display="none";
		okontakt.style.display="block";
        bfilmy.style.color="black";
        bseriale.style.color="black";
        bteledyski.style.color="black";
        breklamy.style.color="black";
        bkontakt.style.color="gray";
       barcontainer.classList.toggle("change");
        menu.classList.toggle("hide");
  }
   

	
    var Hiszpanka = document.getElementById("Hiszpanka");
    var Miasto = document.getElementById("Miasto");
	var Karbala = document.getElementById("Karbala");
	var Wolyn = document.getElementById("Wolyn");
	var Duszno = document.getElementById("Duszno");
	var BedzieLepiej = document.getElementById("BedzieLepiej");
	var Faustus = document.getElementById("Faustus");
	var Polandja = document.getElementById("Polandja");
	var Miss = document.getElementById("Miss");
	var Kler = document.getElementById("Kler");
	var Legiony = document.getElementById("Legiony");

    var SamaSlodycz = document.getElementById("SamaSlodycz");
    var DzwonyWojny = document.getElementById("DzwonyWojny");

   var ModalTitle = document.getElementById("ModalTitle");


    var ModalContainer = document.getElementById("ModalContainer");

    var body = document.getElementsByTagName("BODY")[0];

  
    

    var closeModal = document.getElementById("closeModal");
    
    
//FilmyModals//

    Legiony.onclick = function(){
        ModalContainer.className="comodal show";
	    closeModal.className="close show";
        body.style.overflow="hidden";
 slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/13645189_681468778673982_2565973695546808438_n.jpg";
 slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/13920726_682619761892217_4840910822372011634_n.jpg";
slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/13876314_681468218674038_7868864943994627730_n.jpg";
slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/13892244_682619598558900_3480197778830680698_n.jpg";
slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/13920726_682619761892217_4840910822372011634_n.jpg";
        
           ModalTitle.innerHTML = "Legiony";
        data.innerHTML = "";
        opis.innerHTML=''
  
    }
    
    Kler.onclick = function(){
        
        ModalContainer.className="comodal show";
	    closeModal.className="close show";
        body.style.overflow="hidden";
        slide1.src="http://1.fwcdn.pl/ph/56/72/775672/681751_1.1.jpg";
        slide2.src="http://1.fwcdn.pl/ph/56/72/775672/681752_1.1.jpg";
	   slide3.src="http://1.fwcdn.pl/ph/56/72/775672/681753.1.jpg";
	   slide4.src="http://1.fwcdn.pl/ph/56/72/775672/681750_1.1.jpg";
	   slide5.src="https://www.canalplus.pl/ms_galeria/galeria/47449_3.jpg";
        
        ModalTitle.innerHTML = "Kler";
           tytul.innerHTML = "Polandja";
        data.innerHTML = "2017";
        opis.innerHTML='"W ciągu 24 godzin grupa bohaterów przeżywa pasmo zabawnych przygód."'
        
        slidevideo.src= "https://www.youtube.com/embed/EhCXhs24Ca4?rel=0";
    }
    
    Miss.onclick = function(){
	   ModalContainer.className="comodal show";
	    closeModal.className="close show";
        body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/7.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/9.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/10.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/41.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/61.jpg";
        
        tytul.innerHTML = "Doktor Faustys";
        data.innerHTML = '';
        opis.innerHTML='';
        slidevideo.src= "";
    }
    
     Polandja.onclick = function(){
	   ModalContainer.className="comodal show"
		 closeModal.className="close show"
         body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/1.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6669.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6670.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6671.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6672.jpg";
         
         tytul.innerHTML = "Bedzie Lepiej";
         data.innerHTML = "";
        opis.innerHTML=''
        slidevideo.src= "";
    }
	
	 Faustus.onclick = function(){
	   ModalContainer.className="comodal show"
		  closeModal.className="close show"
         body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6673.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6674.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6675.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6677.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/img_6678.jpg";
         
         tytul.innerHTML = "Duszno";
         data.innerHTML = "";
        opis.innerHTML='';
        slidevideo.src= "";
    }
     
	 
	  BedzieLepiej.onclick = function(){
	   ModalContainer.className="comodal show"
		   closeModal.className="close show"
          body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/01-1-1024x512.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/635500505953697924.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/comment_ye4dtx10bldtjngyrjrll6octxtolqa6.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/pap_wolyn_film_600.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/wolyn.jpg";
          
          tytul.innerHTML = "Wolyn";
          data.innerHTML = "2016";
        opis.innerHTML='"Ojciec Zosi postanawia wydać ją za najbogatszego we wsi wdowca z dwójką dzieci, nie bacząc na to, że córka kocha ukraińskiego chłopca. Wkrótce życie lokalnej społeczności diametralnie zmienia II wojna światowa."'
        slidevideo.src= "https://www.youtube.com/embed/MiBEJW6FuhA?rel=0&amp;showinfo=0";
          
    }
	  
	   Duszno.onclick = function(){
	   ModalContainer.className="comodal show"
		    closeModal.className="close show"
           body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-58-00.png";
        slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-58-14.png";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-58-30.png";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-58-43.png";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-59-11.png";
           
           tytul.innerHTML = "Karbala";
           data.innerHTML = "2017";
        opis.innerHTML='"Rok 2004, siedziba władz lokalnych w irackiej Karbali, City Hall, zostaje zaatakowana przez Al-Kaidę i sadrystów. Grupa polskich oraz bułgarskich żołnierzy odpiera kolejne ataki."'
        slidevideo.src= "https://www.youtube.com/embed/B3bndYSO6Dw?rel=0&amp;showinfo=0";
    }
	   
	   Wolyn.onclick = function(){
	   ModalContainer.className="comodal show"
		    closeModal.className="close show"
           body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-52-58.png";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-53-24.png";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-53-43.png";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-54-29.png";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-17-55-30.png";
           
           tytul.innerHTML = "Miasto 44";
           data.innerHTML = "2014";
        opis.innerHTML='"Miłość dwojga młodych ludzi zostaje wystawiona na próbę, gdy 1 sierpnia 1944 wybucha Powstanie Warszawskie."'
        slidevideo.src= "https://www.youtube.com/embed/KEA76l3tLzM?rel=0&amp;showinfo=0";
           
    }
	    
   Karbala.onclick = function(){
	   ModalContainer.className="comodal show"
	   closeModal.className="close show"
       body.style.overflow="hidden";
	  slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/10-1-0-0-01-00-0001-0-1-o-jpg505007.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-00-34.png";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-00-12.png";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/fotohiszpanka_fb_d_0049.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/zrzut-ekranu-2016-03-26-o-18-01-17.png";
       
       tytul.innerHTML = "Hiszpanka";
       data.innerHTML = "2014";
       opis.innerHTML= '"Schyłek I wojny światowej. Ignacy Jan Paderewski staje się celem mentalnego ataku."';
        slidevideo.src= "https://www.youtube.com/embed/sf23bLdjUYw?rel=0&amp;showinfo=0";
   }
   
   Miasto.onclick = function(){
   }
   
   Hiszpanka.onclick = function(){
   }
   
//SerialeModals//

	   
	   SamaSlodycz.onclick = function(){
           
var div = document.createElement("div");
div.id="div";
div.style.zIndex="250";
div.style.width = "300px";
div.style.height = "30px";
div.style.color = "white";
div.style.fontSize="10px";
div.style.fontFamily="Raleway";
div.innerHTML = 'zdjęcia : Marcin "Makufly" Makowski';
div.style.margin="auto";
document.getElementsByClassName("mainmodal")[0].appendChild(div);
	   
	   
	   
	   omodal.className="comodal show"
	   closeModal.className="close show"
       body.style.overflow="hidden";
	  slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/sama-slodycz-1-marta-roma-gasiorowska_19863382.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/5967493-sama-slodycz-428-643.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/53392d79b4d28_g.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/42.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/6cfc83c1327404ab390ef62df642acf9.jpg";
	   
	  
       
       tytul.innerHTML = "Sama Slodycz";
       data.innerHTML = "";
       opis.innerHTML='';
       slidevideo.src= "";
	   
	   
	   
	   
    }
   
   DzwonyWojny.onclick = function(){
	   omodal.className="comodal show"
	   closeModal.className="close show"
       body.style.overflow="hidden";
	   slide1.src="https://milenajaroszek.files.wordpress.com/2016/03/p029b877.jpg";
	   slide2.src="https://milenajaroszek.files.wordpress.com/2016/03/passing_bells_5.jpg";
	   slide3.src="https://milenajaroszek.files.wordpress.com/2016/03/passing-bells1.jpg";
	   slide4.src="https://milenajaroszek.files.wordpress.com/2016/03/the-passing-bells_3094306b.jpg";
	   slide5.src="https://milenajaroszek.files.wordpress.com/2016/03/the-passing-bells-jack-lowden.jpg";
       
       tytul.innerHTML = "Dzwony Wojny";
       data.innerHTML = "";
       opis.innerHTML='';
       slidevideo.src= "";
    }
   
   
//CloseModal//
    
    closeModal.onclick = function(){
       ModalContainer.style.display="none";
            closeModal.className="close hide"
            body.style.overflow="auto";
           slidevideo.src= "";
	    
	      document.getElementsByClassName("mainmodal")[0].removeChild(document.getElementById("div"));
    }
    
    window.onclick = function(event){
        if(event.target == omodal){
            omodal.className="comodal hide"
            closeModal.className="close hide"
            body.style.overflow="auto";
            slidevideo.src= "";
		   
		  document.getElementsByClassName("mainmodal")[0].removeChild(document.getElementById("div"));
        }
    }
    
    
//CopyFunction//

function myFunction() {
 var copyText = document.getElementById("myInput");
    copyText.select(); 
     document.execCommand("Copy");
   
 var tooltip = document.getElementById("myTooltip");
     tooltip.innerHTML = "Copied";
   }

function outFunc() {
      var tooltip = document.getElementById("myTooltip");
      tooltip.innerHTML = "Copy to clipboard";
   }

