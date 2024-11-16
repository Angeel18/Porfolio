let stickybox = document.getElementById("stickybox");
var button1 = document.getElementById("boton1");
var button2 = document.getElementById("miminizar");


var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var mirar = document.getElementById("mirar");

var inputancho = document.getElementById("ancho")
var inputlargo = document.getElementById("largo");
var inputtotal = document.getElementById("largo");
var ancho = inputancho.value;
var largo = inputlargo.value;

var estado = 1;
var estadoAnterior;

mirar.addEventListener("click",function mirar() {
    console.log("estado="+estado)
    console.log("estadoAnterior="+estadoAnterior    )
})


button1.addEventListener("click", function ampliar() {
    stickybox.style.height = "530px";
    content3.style.display="flex";
    estadoAnterior=3;
    estado=3;
})
button2.addEventListener("click", function ampliar() {
    switch (estado) {
        case 1:
            stickybox.style.height = "80px";
            content2.style.display = "none";
            estado = 2;
            estadoAnterior = 1;
            console.log(2)
            break;
        case 2:
            if (estadoAnterior == 1) {
                stickybox.style.height = "200px";
                content2.style.display="flex";
                console.log(1);
                estado=1;
            } else if (estadoAnterior == 3) {
                stickybox.style.height = "530px";
                content2.style.display="flex";
                content3.style.display="flex";

                console.log(1);
                estado=3;
            }
            break;
        case 3:
            stickybox.style.height = "80px";
            content2.style.display = "none";
            content3.style.display = "none";
            estado = 2;
            estadoAnterior = 3;
            console.log(3)
            break;

        default:
            break;
    }
})


