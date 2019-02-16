window.onload = function () {
    var parrafos = document.getElementById("info").querySelectorAll("p");
    //Controlamos el movimiento del ratón
    ["mouseover","mouseout"].forEach(function(action){
        window.addEventListener(action, function(pointer){
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
        parrafos[3].innerHTML = target.button == 0? "Clic esquerre Si":"Clic esquerre No";
        parrafos[4].innerHTML = target.button == 2? "Clic dret Si":"Clic dret No";
    };

    function modificarTextoCoordenadas(puntero,x,y){
        return puntero.innerHTML.split(" ")[0] + " [" + x + ", " + y +"] ";
    }

}