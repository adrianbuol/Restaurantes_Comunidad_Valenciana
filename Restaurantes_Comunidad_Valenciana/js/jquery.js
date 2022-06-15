// Date para footer
var months = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Augosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);

var WeekDays = new Array(
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
);

var f = new Date(); //javascript

var strDate =
  WeekDays[f.getDay()] +
  " - " +
  months[f.getMonth()] +
  " " +
  f.getDate() +
  ", " +
  f.getFullYear();

$(function () {
  $("footer > h3:first-of-type").replaceWith("<h3>" + strDate + "</h3>");
});

$(function () {
  // Imagenes
  $("section>article>img").click(function () {
    var ruta = $(this).attr("src");
    $(this).siblings(":first-child").attr("src", ruta);
  });

  // Ventana Emergente > Forma
  let wh = window.innerHeight;
  let ww = window.innerWidth;

  $("#ventanaEmergente").height(wh / 1.5);
  $("#ventanaEmergente").width(ww / 1.5);
  $("#ventanaEmergente").css({ top: wh / 7, left: ww / 7 });

  // Ventana Emergente > Mostrar > Añadir Imagen
  $("section>article>img:first-of-type").click(function () {
    $("#ventanaEmergente").css("display", "flex");
    $("#ventanaEmergente").find("img").remove();

    $(this).clone().prependTo("#ventanaEmergente").slideToggle("slow");
    // ZOOM
    $("#ventanaEmergente>img").dblclick(function () {
      $(this).css("object-fit", "cover");
    });
  });

  // Ventana Emergente > Cerrar
  $("#ventanaEmergente>button").click(function () {
    $("#ventanaEmergente").css("display", "none");
  });
});
