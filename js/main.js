$(document).ready(function () {
       animateListScrolling();
});

function animateListScrolling() {
       $("#listaIstorieApa").click(function () {
              $('html, body').animate({
                     scrollTop: $("#istorieApa").offset().top - 75
              }, 1000);
       });

       $("#listaProprFizApa").click(function () {
              $('html, body').animate({
                     scrollTop: $("#proprFizApa").offset().top - 75
              }, 1000);
       });
       $("#listaProprSolvApa").click(function () {
              $('html, body').animate({
                     scrollTop: $("#proprSolvApa").offset().top - 75
              }, 1000);
       });

       $("#listaCompChimApa").click(function () {
              $('html, body').animate({
                     scrollTop: $("#compChimApa").offset().top - 75
              }, 1000);
       });

       $("#listaPoluareApa").click(function () {
              $('html, body').animate({
                     scrollTop: $("#poluareApa").offset().top - 75
              }, 1000);
       });
       $("#listaEfecte").click(function () {
              $('html, body').animate({
                     scrollTop: $("#efecte").offset().top - 75
              }, 1000);
       });
}