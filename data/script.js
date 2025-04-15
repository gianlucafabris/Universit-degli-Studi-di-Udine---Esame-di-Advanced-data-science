//scorri in su - slide precedente
function scrollUp() {
  var vheight = $(window).height();
  $('html, body').scrollTop((Math.ceil($(window).scrollTop() / vheight)-1) * vheight);
};
//scorri in giù - slide successiva
function scrollDown() {
  var vheight = $(window).height();
  $('html, body').scrollTop((Math.floor($(window).scrollTop() / vheight)+1) * vheight);
};

jQuery(function($){
  //aggiungi pulsante slide header
  $("#header .title.toc-ignore").before("<div class='controlli'>slide<a href='#' class='next'>&#11157;</a></div>");
  //aggiungi title alle immagini come alt
  $(".img img").each(function() {
    $(this).attr("title", $(this).attr("alt"));
  });
  //inserisci grafici all'interno di un div
  var i = 0;
  $("img[src*='data:image/png'][width='672']").each(function() {
    $(this).wrap("<div class='img' id='grafico-"+i+"'></div>");
    i++;
  });
  //inserisci log all'interno di un div
  var i = 0;
  $("pre").each(function() {
    $(this).wrap("<div class='log' id='log-"+i+"'></div>");
    i++;
  });
  //scorri con pulsanti
	$(".next").on("click", function(event){
    scrollDown();
    event.preventDefault();
	});
  $(".prev").on("click", function(event){
    scrollUp();
    event.preventDefault();
	});
});
//scorri con la tastiera
$(document).keydown(function(event) {
 if(event.keyCode == 37){ //freccia a sinistra
   scrollUp();
 };
 if(event.keyCode == 39){ //freccia a destra
   scrollDown();
 };
 if(event.keyCode == 38){ //freccia in su
   scrollUp();
 };
 if(event.keyCode == 40){ //freccia in giù
   scrollDown();
 };
 event.preventDefault();
});
