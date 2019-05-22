// Utilizzare l’API:
// https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una card
// per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi,
// in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente




$(document).ready(function(){

  // var n = prompt('Quanti giocatori vuoi generare?');

  $.ajax({
    url: "https://www.boolean.careers/api/array/basket",
    type: "GET",
    data: {
      'n': 3
    },
    success: function(risposta){
      var giocatori = risposta.response;
      console.log(giocatori[0])
      var ok = $('#template').html();
      var template = Handlebars.compile(ok);

      var player = {
        'code': giocatori[0].playerCode,
        'points': giocatori[0].points,
        'fouls': giocatori[0].fouls,
        'rebounds': giocatori[0].rebounds,
        'two': giocatori[0].twoPoints,
        'three': giocatori[0].threePoints
      };
      var html = template(player) ;
      $('.container').append(html)

    },
    error: function(){
      alert("Chiamata fallita!!!");
    }
    });

});
