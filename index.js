//let usuarioConEmail = "joaquin.cam@live.com";
//const contrasenia = "hola";

//const nombre = prompt("ingrese su nombre");
//const usuario = prompt("ingrese su usuario");
//const password = prompt("ingrese su contraseña");

//function validacion(usuario, password) {
//  if (usuario !== usuarioConEmail && contrasenia !== password) {
//    alert("Su usuario y contraseña son incorrectos");
//  } else if (usuarioConEmail !== usuario) {
//    alert("Usuario Incorrecto");
//  } else if (contrasenia !== password) {
//    alert("Contraseña Incorrecta");
//  }
//}
//console.log(validacion(usuario, password));

//function saludar(usuario) {
//if (usuario == usuarioConEmail && contrasenia == password) {
//return alert(`Bienvenido ${usuario}`);
//}
//}
//saludar(usuario);

//let tieneArroba = true;

//for (let i = 0; i < usuarioConEmail.length; i++) {
//if (usuarioConEmail[i] === "@") {
//tieneArroba = true;
//break;
//} else if (usuarioConEmail[i] != "@") {
//prompt("Ingrese nuevo Email");
//}
//break;
//}

/*Segunda pre entrega*/

/*CASO ECOMMERCE

* TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:

- id

- producto

- precio

- fechaVencimiento (en el caso de que tenga una)

- descripción

- categoría (si tiene una)

- oferta (booleano)

Quiero que algunos de los elementos tengan un true en oferta.

2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).

Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos:

- […array] —> spread operator

- array.slice() —> copia segura en otra variable

- [].concat(array) —> copia segura en otra variable

4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().*/

const productos = [
  {
    id: 1,
    producto: "bandeja lyon",
    precio: 1500,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 2,
    producto: "picador amsterdam",
    precio: 1000,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 3,
    producto: "picador esfera tricolor",
    precio: 1850,
    categoria: "parafernalia",
    oferta: true,
  },
  {
    id: 4,
    producto: "pipa madera",
    precio: 700,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 5,
    producto: "pipa dibujo con tapa",
    precio: 900,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 6,
    producto: "sauver",
    precio: 1000,
    categoria: "parafernalia",
    oferta: true,
  },
  {
    id: 7,
    producto: "pipa spiderman",
    precio: 1000,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 8,
    producto: "papel ocb premium",
    precio: 700,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 9,
    producto: "papel celulosa zeuz",
    precio: 900,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 10,
    producto: "clipper grande",
    precio: 1500,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 11,
    producto: "papel hornet transparente",
    precio: 1100,
    categoria: "parafernalia",
    oferta: true,
  },
  {
    id: 12,
    producto: "picador de madera eco",
    precio: 500,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 13,
    producto: "picador aluminio radioactivo",
    precio: 2200,
    categoria: "parafernalia",
    oferta: true,
  },
  {
    id: 14,
    producto: "pipa pirex m calavera",
    precio: 1100,
    categoria: "parafernalia",
    oferta: false,
  },
  {
    id: 15,
    producto: "cenicero raw",
    precio: 700,
    categoria: "parafernalia",
    oferta: false,
  },
];

//2)

function sale() {
  productos.forEach((elemento) => {
    if (elemento.oferta) {
      console.log(elemento.precio * 0.8);
    }
  });
}

sale();

//3)

const productosOrdenadosNumericamente = [...productos].sort((a, b) => {
  return a - b;
});
console.log(productosOrdenadosNumericamente);

//4)

function seeOfferts() {
  let offer = confirm("¿Queres ver las ofertas de la tienda?");
  if (offer) {
    let ofertaTienda = productos.filter((a) => {
      return a.oferta;
    });
    console.log(ofertaTienda);
  }
}

seeOfferts();

//5)
function buscarProductos() {
  let search = prompt("Busque su producto deseado");

  let producto = productos.find((elemento) => {
    return elemento.producto === search;
  });

  alert("Este es su producto deseado");
}

buscarProductos();
console.log(buscarProductos);
