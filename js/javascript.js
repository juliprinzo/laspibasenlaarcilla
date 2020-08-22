//SHOP

//VARIABLES

var artista = ["Anic", "Libre", "Pina", "Azul Cian", "SUD"]
var colores = ["rosa", "coral", "celeste", "negro","blanco"];
var uso = ["decorativo", "utilitario", "jardin", "colgantes", "infusion"]
var precioProducto = ["menor a $250", "entre $250 y $600", "entre $600 y $900", "entre $900 y $1500", "más de $1500"];
var precioDeseado = parseInt(prompt("¿Qué precio estabas bucando para el regalo?"));

var favoritos = [];



//ARRAY PRECIO

for (n=0; n<precioProducto.length; n++){
  switch(n){
    case 0:
      precioProducto<250;
      console.log("se muestran productos entre $0 y $250")
      break;
    case 1:
      precioProducto>250 && precioProducto<600;
      console.log("se muestran productos entre $250 y $600")
      break;
    case 2:
      precioProducto>600 && precioProducto<900;
      console.log("se muestran productos entre $600 y $900")
      break;
    case 3:
      precioProducto>900 && precioProducto<1500;
      console.log("se muestran productos entre $900 y $1500")
      break;
    case 4:
      precioProducto>1500;
      console.log("se muestran productos mayores a $1500")
      break;
    } 
  }


function filtroPrecio(){

  if (precioDeseado<250) {
    console.log(precioProducto[0]);
  }
  else if(precioDeseado>250 && precioDeseado<600){
    console.log(precioProducto[1]);
  }
  else if(precioDeseado>600 && precioDeseado<900){
    console.log (precioProducto[2]);
  }
  else if (precioDeseado>900 && precioDeseado<1500){
    console.log(precioProducto[3]);
  }
  else if (precioDeseado>1500){
    console.log(precioProducto[4])
  }

}
filtroPrecio();



//MAIL CLIENTE

function mailcliente(){
var mailCliente = prompt("Querés ser parte de nuestro mercadito? dejanos tu mail y te escribimos para formar parte")
console.log("El mail del cliente que quiere formar parte del mercadito:" + mailCliente);
}
mailcliente();

//OBJETO

function producto(artista, uso, precioProducto, color){
  this.artista = artista;
  this.uso = uso;
  this.precioProducto = precioProducto;
  this.color = color;
  this.deseado = function(){
    if(precioProducto = precioDeseado){//se que no es correcto el = pero no se como hacer la comparacion entre el rango de precio de precioProductoy el precio que se pone en el promp.
      console.log("te podemos ofrecer de" + " " + this.artista + " " + "de uso" + " " + this.uso)
      }
    else{
      console.log("no hay productos disponibles")
      }
  }
  producto.deseado();
}



//PRODUCTOS

var productoBowlDeco = new producto(artista[1], uso[2], precioProducto[1], colores[2])
var productoTazaGeometrica = new producto(artista[3], uso[0], precioProducto[2], colores[1])
var productoMacetaBallena = new producto(artista[4], uso[1], precioProducto[4], colores[2])
var productoTazaLunar = new producto(artista[3], uso[3], precioProducto[3], colores[0])
var productoLlamas = new producto(artista[1], uso[4], precioProducto[2], colores[3])
var productoEnElSueño = new producto(artista[2], uso[0], precioProducto[0], colores[1])

//FAVORITOS

  var iconoCorazon = false;
  if(!iconoCorazon){
  favoritos.push(productoEnElSueño);
  }


// hacer un array de productos que tenga objetos con toda la info de manera que se entienda mas rapido. usar el .filter para
//filtrar los productos x precio. objetos dentros del array entre llaves con clave entre comillos y valor. precio como numero.
//archivo nuevo de js "data" llamandolo en el html por orden de ejecucion, va a estar primero.
//pruebo llamarlo en javascript.js para ver que funcione.
//una vez que tengo el array probar un for para corroborar que funcione todo bien

//TOGGLE

$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })

  $(document).ready(function(){
    $('button').click(function(){
        $('.alert').show()
    }) 
});



