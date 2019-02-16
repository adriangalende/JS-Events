window.onload = function () {
    //Controlamos el movimiento del ratón
    ["mouseover","mouseout"].forEach(function(action){
        window.addEventListener(action, function(pointer){
            document.getElementById("info").querySelectorAll("p").forEach(function(puntero, indice){
                if(indice == 0){
                    puntero.innerHTML = modificarTextoCoordenadas(puntero, pointer.screenX, pointer.screenY)
                } else if (indice == 1){
                    puntero.innerHTML = modificarTextoCoordenadas(puntero, pointer.clientX, pointer.clientY)
                }
            })
        }, false);
    })

    function modificarTextoCoordenadas(puntero,x,y){
        return puntero.innerHTML.split(" ")[0] + " [" + x + ", " + y +"] ";
    }

}