window.onload = function(){
        document.body.addEventListener("mouseover", function(evento){
            if(evento.toElement.id != document.body && evento.toElement.id != "wrapper") {
                document.getElementById("footer").innerHTML = "This is the Footer - Mouse over: " + evento.fromElement.id
            }
        }, false)

        //Capturamos el evento onClick en el div wrapper
        document.getElementById("wrapper").addEventListener("click", detecta_zona,false);

        function detecta_zona(puntero){
            puntero.path.forEach(function(path){
                if(path.id != undefined && path.id != "" && path.id != "wrapper"){
                    alert(path.id);
                    return;
                }
            })
        }
}