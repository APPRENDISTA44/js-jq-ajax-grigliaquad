$(document).ready(function () {
  var source = $('#quadrato-template').html();
  var template = Handlebars.compile(source);
  var html = template();
  var numeroQuadrati = 36
  for (var i = 0; i < numeroQuadrati ; i++) {
    $('.container').append(html);
  }

  $(document).on('click','.entry',
  function () {
    var elementoCliccato = this;
    $.ajax(
      {
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
          $(elementoCliccato).removeClass('yellow');
          $(elementoCliccato).removeClass('green');
          var numero = data.response;
          $(elementoCliccato).children('h2').text(numero);
          if (numero<6) {
              $(elementoCliccato).addClass('yellow');
          }else {
            $(elementoCliccato).addClass('green');
          }
        },
        error: function() {
            alert("Si è verificato un errore");
        }

      }
    );

  });

});
