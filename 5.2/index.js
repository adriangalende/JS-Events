window.onload = function () {
    var info = document.getElementById("info");
    var parrafos = info.querySelectorAll("p");
    var h1 =  info.children[0];
        //Controlamos el movimiento del ratón
    ["mouseover","mouseout"].forEach(function(action){
        window.addEventListener(action, function(pointer){
            cambiarTitulo("Ratolí")
            info.style = "background-color:#fff";
            parrafos.forEach(function(puntero, indice){
                if(indice == 0){
                    puntero.innerHTML = modificarTextoCoordenadas(puntero, pointer.screenX, pointer.screenY)
                } else if (indice == 1){
                    puntero.innerHTML = modificarTextoCoordenadas(puntero, pointer.pageX, pointer.pageY)
                } else {
                    //no hacer nada
                }
            })
        }, false);
    });

    //Controlamos los clicks del ratón
    window.onmousedown = function(target){
        cambiarTitulo("Ratolí")
        info.style = "background-color:#ffffdd";
        parrafos[3].innerHTML = target.button == 0? "Clic esquerre Si":"Clic esquerre No";
        parrafos[4].innerHTML = target.button == 2? "Clic dret Si":"Clic dret No";
    };

    function modificarTextoCoordenadas(puntero,x,y){
        return puntero.innerHTML.split(" ")[0] + " [" + x + ", " + y +"] ";
    }

    function cambiarTitulo(nuevoTitulo){
        h1.innerHTML = nuevoTitulo;
    }


    //controlamos acciones con teclado
    ["keydown","keyup"].forEach(function(action){
        window.addEventListener(action, function(key){
            cambiarTitulo("Teclat")
            info.style = "background-color:#8db6bf";
            parrafos.forEach(function(parrafo, indice){
                if(indice == 0){
                    parrafo.innerText = "Caracter ["+key.key+"]";
                } else if (indice == 1){
                    parrafo.innerText = "Codi ["+key.which+"]";
                } else {
                    parrafo.innerHTML = "";
                }
            })

        }, false);
    });
}