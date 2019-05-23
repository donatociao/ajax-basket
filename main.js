// Utilizzare l’API:
// https://www.boolean.careers/api/array/basket?n=numberPlayers
// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una card
// per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi,
// in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){
//chiedo all'utente quanti giocatori vuole generare
  var n = prompt('Quanti giocatori vuoi generare?');

  //interrogo API
  $.ajax({
    url: "https://www.boolean.careers/api/array/basket",
    type: "GET",
    data: {
      //Imposto valori interrogazione
      'n': n
    },
    success: function(risposta){
      //imposto variabile con la risposta generata
      var giocatori = risposta.response;
      //indico il codice da clonare
      var codetoclone = $('#template').html();
      //imposto funzione compilatore
      var template = Handlebars.compile(codetoclone);
      //dichiaro variabile che definisce i valori da cercare per creare un giocatore
      var player;
      //dichiaro variabile per appendere il codice generato
      var html;

      //inizializzo un ciclo per generare i giocatori desiderati
      for (i = 0; i < n; ++i) {
        player = {
          'code': giocatori[i].playerCode,
          'points': giocatori[i].points,
          'fouls': giocatori[i].fouls,
          'rebounds': giocatori[i].rebounds,
          'two': giocatori[i].twoPoints,
          'three': giocatori[i].threePoints
        };
        html = template(player) ;
        $('.container').append(html)
      }
    },
    error: function(){
      alert("Chiamata fallita!!!");
    }
  });
});
