$(document).ready(function() {
  alert('ehi oh let\' go');


  $.ajax(
    {
      'url':'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function (data) {
        console.log(data);
      },
      'error': function (richiesta, stato, errori) {
        alert('errore' + errors);
      }
    });












});
