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

