function buscaPalabraMasLarga() {
   var palabra;

  $(document).ready(function () { 
  $("#enviar").click(function () {
  palabra_mas_grande = ""
  s= $("#campo").val();
  palabras = s.replace(",", " ").split(" "); 
  palabras.forEach(function(palabra){
  if (palabra.length > palabra_mas_grande.length){
       palabra_mas_grande = palabra
       $("#resultado").text(palabra_mas_grande);
   };
  });
    });
    });

  
};