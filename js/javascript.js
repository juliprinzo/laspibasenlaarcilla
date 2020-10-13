/////////////////////// SHOP ///////////////////////

//////////////
//PRODUCTOS//
/////////////

// ajax

var productos;

$.ajax({
  url: 'dataBase.JSON',
  dataType: 'json',
  async:false,
  success: function (data) {
    productos = data;
    },
    error: function (jqXHR, status, error) {
      console.log(jqXHR),
      console.log(`Error -> Status: ${status} - Error: ${error}`);
    }  
});


//Contruyendo objetos en el html

function crearProductos(producto, desSeleccionar) { 
  return `
    <article id="productoCard-${producto.id}" class="scale-in-center">
      <img src="${producto.imagen}" alt="">
      <div class="nombre-like">
        <div>
          <h2 class="h2-almendra-azul">${producto.nombre}</h2>
          <p class="subtitulo-azul-chico"> por ${producto.artista}</p>
        </div>
        <div class="like">
          <img class="icono-like" src="img/shop/like.svg" alt="like" onclick="seleccionarFavorito(${producto.id})">
          <img class="icono-like-lleno" src="img/shop/like-lleno.svg" alt="like" onclick="${desSeleccionar}(${producto.id})">
        </div>
      </div>
      <hr class="separador-coral">
      <div class="comprar-producto">
        <p>$${producto.precio}</p>
        <a class="boton-coral hvr-grow-1" onclick="llenarCarrito(event)">Lo quiero</a>
      </div>
     </article>`;
}


function construirHTML (ContainerID, arrayProductos, desSeleccionar){
  var productosHtml = document.getElementById(ContainerID);
  productosHtml.innerHTML = "";
  var html = "";

  arrayProductos.forEach((producto) =>{
    html += crearProductos(producto, desSeleccionar);
  });
  productosHtml.innerHTML = html;
}

window.onload = () =>{
  construirHTML("productos",productos, "desSeleccionarFavorito");
}



//////////////
///CARRITO///
/////////////

var carrito = [];
var divProductosOnCart = document.getElementById("productosOnCart")
var productosSeleccionados = document.getElementById("productosSeleccionados")
var productosMap = new Map();
var precioTotal=0;

//Apreto boton "Lo quiero"
function llenarCarrito(event){

  // Creacion del array de productos que quiere
  var productoHtml = event.target.parentNode.parentNode;
  const productoElegido = productos.filter(elem => "productoCard-" + elem.id == productoHtml.id)
  carrito.push(productoElegido[0])
  console.log(carrito)

  //!// HACER · QUE LOS PRODUCTOS SE ENVIEN DE A UNO.
  //envio los productos a comprar a sessionStorage
  let dataBaseCarrito = JSON.stringify(carrito)
  sessionStorage.setItem("Productos en carrito", dataBaseCarrito);
  let storageProductosCarrito = sessionStorage.getItem("Productos en carrito")
  var productosGuardados = JSON.parse(storageProductosCarrito)

  //Contador carrito
  let contadorBasket = document.getElementById ("contadorBasket")
  contadorBasket.innerHTML = productosGuardados.length;

  //construyo el html del carrito, tomando los productos guardados en Storage.
  productosSeleccionados.innerHTML ="";
  productosGuardados.forEach(producto =>{       
    let nuevoArticleCarrito = document.createElement("article")
    let productosEnCarrito = productosSeleccionados.appendChild(nuevoArticleCarrito);
    productosEnCarrito.className = `productoEnCarrito-${producto.id}`;
    productosEnCarrito.innerHTML ="";

    //preciototalcompra TAMPOCO SALE
    precioTotal+=producto.precio;
    console.log(precioTotal)
  
    productosEnCarrito.innerHTML = `
    <div class="carrito-imagenYnombreProducto">
        <img src="${producto.imagen}"> 
        <div class="nombre-y-artista">
          <p class="carrito-nombre-producto">${producto.nombre}</p>
          <p class="subtitulo-azul-chico">de ${producto.artista}</p>
        </div>
    </div>
    <div class="carrito-cantidad">
      <h4 class="carrito-minititulo">Cantidad</h4>
      <div class="carrito-cantidad-prod">
        <a id="restar-producto">-</a>
        <p id="contadorProducto">0</p>
        <a id="sumar-producto">+</a>
      </div>
    </div>
    <div class="carrito-cantidad">
      <h4 class="carrito-minititulo">precio</h4>
      <p>$${producto.precio}</p>
    </div>
    `
  }); 

  // total de productos
  let totalProductos = document.getElementById("carrito-productosTotal")
  totalProductos.innerHTML= carrito.length

  var contadorProducto= document.getElementById("contadorProducto")

  function productoRepetido(){  
    let cantidadProducto = parseInt(contadorProducto.innerText)
    for(var i=0; i<carrito.length; i+=1){
        if(carrito[i].id === carrito[i].id){
          let nuevaCantidad=cantidadProducto+=1
          contadorProducto.innerText=nuevaCantidad
          // y no contruyas el html
        }
    }
}
productoRepetido()
 
}

function sumarProducto(id){
  $(`#productoEnCarrito-${id} .carrito-cantidad .carrito-cantidad-prod #sumarProducto`).onclick = function(){
    carrito.push(productos.id)
  }
}
sumarProducto()


/* var botonBorrarProducto = document.getElementById("borrar-producto");
    botonBorrarProducto.onclick = function() {//sessionStorage.removeItem("Productos en carrito")
    //NO FUNCIONA//no funciona removechild. quiero que se elimine ese html cuando pongo borrar producto.
    //PROBE `productoEnCarrito-${producto.id}`.parentNode.removeChild(`productoEnCarrito-${producto.id}`)
    var productoPorClass = document.getElementsByClassName(`productoEnCarrito-${producto.id}`)
    console.log(productoPorClass)
    productoPorClass.remove();
    } */

//usar funciones dentro de llenar carrito para cada una de las acciones asi despues las reutilizo
let amount = 0; // asi arranco el costo total del producto. en 0 amount+= prod.price



/////////////////////
////ICONO CARRITO////
/////////////////////

$("#basket").click(function(event){
  event.preventDefault();
  $("#productosOnCart").fadeToggle(150);
});

$("#closeCarrito").click(function(){
  $("#productosOnCart").fadeOut(150);
})


//////////////
////LOGIN////
/////////////

var mailCliente = document.getElementById("login-cliente")
var headerCarrito = document.getElementById("header-carrito")

mailCliente.onclick = function loginCliente(){
  let mailClienteValue = prompt("Dejanos tu mail para enviarte los productos seleccionados")
  console.log("El mail del cliente:" + mailClienteValue);
  localStorage.setItem("mail del cliente", mailClienteValue)
  if(mailClienteValue != null){
    mailCliente.remove();
    let textoBienvenida = document.createElement("P")
    headerCarrito.appendChild(textoBienvenida)
    textoBienvenida.innerHTML="Bienvenida" + " " + mailClienteValue.toLocaleLowerCase() + "!";
  }
}



//////////////
//FAVORITOS//
/////////////

var favoritos = [];
var botonFavoritos = document.querySelector(".favClass");

//Apreto "icono corazon"
function seleccionarFavorito(id){
  $(`#productoCard-${id} .icono-like`).hide("100");
  $(`#productoCard-${id} .icono-like-lleno`).show("100");

  var productoFavorito = productos.filter(elem => elem.id == id)
  favoritos.push(productoFavorito[0])
  console.log(favoritos)
}

function desSeleccionarFavorito(id){
  $(`#productoCard-${id} .icono-like-lleno`).hide("100");
  $(`#productoCard-${id} .icono-like`).show("100");
  // deslikear un producto
  var productoFavorito = favoritos.findIndex( elemento => elemento.id == id)
  favoritos.splice(productoFavorito, 1)
}

//desseleccionar un favorito una vez apretado el boton "ver favoritos"
function desSeleccionarFavoritoAdentro(id){
  $(`#productoCard-${id} .icono-like-lleno`).hide("100");
  $(`#productoCard-${id} .icono-like`).show("100");
  // deslikear un producto
  var productoFavorito = favoritos.findIndex( elemento => elemento.id == id)
  favoritos.splice(productoFavorito, 1)
  construirHTML ("productos", favoritos, "desSeleccionarFavoritoAdentro");
  $(`#productos .icono-like`).hide("100");
  $(`#productos .icono-like-lleno`).show("100");
}

botonFavoritos.onclick = function elegirFavoritos(e){
  e.preventDefault();
  if(botonFavoritos.id === "favoritos"){
    construirHTML ("productos", favoritos, "desSeleccionarFavoritoAdentro");
    $(`#productos .icono-like`).hide("100");
    $(`#productos .icono-like-lleno`).show("100");
    botonFavoritos.id = "favoritos-vertodos";
    botonFavoritos.innerHTML = "Salir de favoritos"
  }else{
    construirHTML ("productos", productos, "desSeleccionarFavorito");
    favoritos.forEach(element => {
      $(`#productoCard-${element.id} .icono-like-lleno`).hide("100");
      $(`#productoCard-${element.id} .icono-like-lleno`).show("100");
    });
    botonFavoritos.id = "favoritos";
    botonFavoritos.innerHTML = '<img src="img/shop/like-lleno.svg" alt="icono-corazon-like">Ver mis favoritos'
  }
}



//////////////
///Filtros///
/////////////

//funcion filtro de artista
function filtrarArtista(event){
let filtro = event.currentTarget.innerText.toLowerCase();
let productoFiltrado = productos.filter(elem => elem.artista == filtro)
construirHTML ("productos", productoFiltrado, "desSeleccionarFavorito")
}

function filtroArtista(){
  let artista = document.getElementsByClassName("artista");
  let quitarFiltro = document.getElementById("artista-quitarFiltro")
  for(n=0; n<artista.length; n++){
    artista[n].addEventListener("click", ()=> {
      filtrarArtista(event);
    })
    quitarFiltro.addEventListener("click", ()=> {
      construirHTML ("productos", productos, "desSeleccionarFavorito")
    })
  }
}
filtroArtista();

//funcion filtro de uso

function filtrarUso(event){
  let filtro = event.currentTarget.innerText.toLowerCase();
  let productoFiltrado = productos.filter(elem => elem.uso == filtro)
  construirHTML ("productos", productoFiltrado, "desSeleccionarFavorito")
  }
  
  function filtroUso(){
    let uso = document.getElementsByClassName("uso");
    let quitarFiltroUso = document.getElementById("uso-quitarFiltro")
    for(n=0; n<uso.length; n++){
      uso[n].addEventListener("click", ()=> {
        filtrarUso(event);
      })
      quitarFiltroUso.addEventListener("click", ()=> {
        construirHTML ("productos", productos, "desSeleccionarFavorito")
      })
    }
  }
  filtroUso();

//Filtro Precio

function htmlFiltroPrecio (valor1, valor2){
  let productoFiltrado = productos.filter(elem =>elem.precio>valor1 && elem.precio<valor2)
  construirHTML ("productos", productoFiltrado, "desSeleccionarFavorito")
}

var precio250 = document.getElementById("precio250")
precio250.onclick= function(){
 htmlFiltroPrecio (0, 250.00)
}

var precio600 = document.getElementById("precio600")
precio600.onclick= function(){
  htmlFiltroPrecio (250.00, 600.00)
}

var precio900 = document.getElementById("precio900")
precio600.onclick= function(){
  htmlFiltroPrecio (600.00, 900.00)
}

var precio1500 = document.getElementById("precio1500")
precio1500.onclick= function(){
  htmlFiltroPrecio (900.00, 1500.00)
}

var precioMayor = document.getElementById("precioMayor")
precioMayor.onclick= function(){
  let productoFiltrado = productos.filter(elem =>elem.precio>1500.00)
  construirHTML ("productos", productoFiltrado, "desSeleccionarFavorito")
}

//Filtro Color

function filtrarColor(event){
  let filtro = event.currentTarget.innerText.toLowerCase();
  let productoFiltrado = productos.filter(elem => elem.color == filtro)
  construirHTML ("productos", productoFiltrado, "desSeleccionarFavorito")
  }
  
  function filtroColor(){
    let color = document.getElementsByClassName("color");
    //let quitarFiltroColor = document.getElementById("color-quitarFiltro")
    for(n=0; n<color.length; n++){
      color[n].addEventListener("click", ()=> {
        filtrarColor(event);
      })
      /* quitarFiltroColor.addEventListener("click", ()=> {
        construirHTML ("productos", productos)
      }) */
    }
  }
  filtroColor();


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





