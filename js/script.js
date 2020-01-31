$(document).ready(function() {
  alert('ehi oh let\' go');


  $.ajax(
    {
      'url':'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function (data) {
      //  console.log(data);
        processData(data.response);
      },
      'error': function (request, state, errors) {
        alert('error' + errors);
      }
    });

//funzione che con un ciclo for riproduce il template
    function processData (cds) {
//  console.log(data);
      for(var i = 0; i < cds.length; i++) {
        var cd = cds[i];
        console.log(cd);
      }

}











});
