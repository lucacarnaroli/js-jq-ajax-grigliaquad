// Griglia 6x6, ad ogni click sul quadrato parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){
  $('.quadrato').click(
    function() {
      $.ajax(
      {
        'url': "https://flynn.boolean.careers/exercises/api/random/int",
        'method': "GET",
        'success': function (risposta) {
          console.log(risposta);
          $('.quadrato').text(risposta.response);
          // if (risposta.response <= 5) {
          //   var yellow = $('.quadrato').addClass('yellow');
          // }else if (risposta.response > 5){
          //   var green = $('.quadrato').addClass('green');
          // }
        },
        'error': function (richiesta, stato, errore) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
   });
});
