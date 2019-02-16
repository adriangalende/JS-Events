window.onload = function () {
    var anchors = document.querySelectorAll('a');

    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', handler, false);
    })


    function handler(element) {
        let target = element.target;
        //Obtenemos la primera parte del texto del enlace para controlar si debemos ocultar o mostrar
        let flag = target.text.split(" ")[0];
        let action = flag.toLowerCase().trim() == "Ocultar".toLowerCase().trim()?'none':'block';

        //Cambiamos el valor de text
        target.text = flag == "Ocultar" ? "Mostrar Elementos" : "Ocultar Elementos";

        console.log(target)

        //Obtenemos la parte que nos interesa de la id del anchor para tratar el parrafo correspondiente
        let id = "contenidos_"+target.id.split("_")[1]
        document.getElementById(id).style = "display:"+action

        //Evitamos que el anchor nos envie a al enlace
        element.preventDefault();
        element.stopPropagation();
    }
}