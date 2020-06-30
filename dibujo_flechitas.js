//Llamo al canvas y le doy contexto
var d = document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");

//Caracteristicas de la linea.
var colorcito = "black";
var grosor = 2;

d.addEventListener("mousemove", dibujarMouse);

function dibujarMouse(elevento){
	fX = elevento.offsetX;
	fY = elevento.offsetY;
	if(elevento.buttons == 1)
	{
	dibujarLinea(colorcito, iX, iY, fX, fY, lienzo);
	}
	iX = fX;
	iY = fY;
}

var enviar = document.getElementById("colorBoton");
var qcolor = document.getElementById("colorTexto");
var borrador = document.getElementById("borrador");
var grueso = document.getElementById("gruesor");
var enviarGrueso = document.getElementById("botonGrosor");
enviar.addEventListener("click", cambiarColor);
borrador.addEventListener("click", borrar);
enviarGrueso.addEventListener("click", qgrueso);

function cambiarColor()
{
	console.log(qcolor.value);
	colorcito = qcolor.value;
	grosor = grueso.value;
}

function qgrueso()
{
	grosor = grueso.value;
}
function borrar()
{
	colorcito = "white";
	grosor = 20;
}

//Función que dibuja las lineas.
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = grosor;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}
