let usuarioConEmail = "joaquin.cam@live.com";
const contrasenia = "hola";

const nombre = prompt("ingrese su nombre");
const usuario = prompt("ingrese su usuario");
const password = prompt("ingrese su contraseña");

function validacion(usuario, password) {
  if (usuario !== usuarioConEmail && contrasenia !== password) {
    alert("Su usuario y contraseña son incorrectos");
  } else if (usuarioConEmail !== usuario) {
    alert("Usuario Incorrecto");
  } else if (contrasenia !== password) {
    alert("Contraseña Incorrecta");
  }
}
console.log(validacion(usuario, password));

function saludar(usuario) {
  if (usuario == usuarioConEmail && contrasenia == password) {
    return alert(`Bienvenido ${usuario}`);
  }
}
saludar(usuario);

let tieneArroba = true;

for (let i = 0; i < usuarioConEmail.length; i++) {
  if (usuarioConEmail[i] === "@") {
    tieneArroba = true;
    break;
  } else if (usuarioConEmail[i] != "@") {
    prompt("Ingrese nuevo Email");
  }
  break;
}
