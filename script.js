    /*Всплывающая форма регистрации*/

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  //document.body.style.overflow = 'hidden';
}
   
span.onclick = function() {
  modal.style.display = "none";
  //document.body.style.overflow = 'scroll';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //document.body.style.overflow = 'scroll';
  }
}

    /*Всплывающая карта*/

var modalmap = document.getElementById("modalMap");
var finder = document.getElementsByClassName("findme")[0];
var finder2 = document.getElementsByClassName("findme2")[0];
var span = document.getElementsByClassName("closeMap")[0];

finder.onclick = function() {
  modalmap.style.display = "block";
  //document.body.style.overflow = 'hidden';
}

finder2.onclick = function() {
  modalmap.style.display = "block";
  //document.body.style.overflow = 'hidden';
}

span.onclick = function() {
  modalmap.style.display = "none";
  //document.body.style.overflow = 'scroll';
}

window.onclick = function(event) {
  if (event.target == modalmap) {
    modalmap.style.display = "none";
    }
  if (event.target == modal) {
    modal.style.display = "none";
    //document.body.style.overflow = 'scroll';
  }
    //document.body.style.overflow = 'scroll';
  
}



               /*Слайды в галерее*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName( "mySlides" );
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }  
 
  slides[slideIndex-1].style.display = "inline";
}
                         /*Всплывающая карта*/
// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(59.9387942, 30.3208946);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 1              // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
