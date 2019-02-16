window.onload = function(){
        document.body.addEventListener("mouseover", function(evento){
            if(evento.toElement.id != document.body && evento.toElement.id != "wrapper") {
                document.getElementById("footer").innerHTML = "This is the Footer - Mouse over: " + evento.fromElement.id
            }
        }, false)
}