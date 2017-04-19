function validar(){
    var palabra;
    $(document).ready(function () { 
    $("#enviar").click(function () {
        palabra = $("#campo").val();
        if(palabra.split(' ').join('')==Al_Reves(palabra).split(' ').join('')){
            $("#resultado").text("Si es Palindromo");
        }else{
            $("#resultado").text("No es  palindromo");
        }

    });
    });
    function Al_Reves (palabra) {
        var reves="";
        for (var i = palabra.length; 0 < i  ; i--) {
                reves+=palabra[i-1];
        };
        return reves;
    }
    }