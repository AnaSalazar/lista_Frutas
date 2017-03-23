
function agregarFruta(){
  var listaOrdenada = document.getElementById("lista");
  var listaFrutas = document.createElement("li");
  var frutaIngresada = document.getElementById("fruta").value;

  listaFrutas.innerHTML = frutaIngresada;
  listaOrdenada.appendChild(listaFrutas);
  document.getElementById("fruta").value = "";
}
function eliminarFruta(){
  var listaOrdenada = document.getElementById("lista");
  var listaFrutas = document.getElementsByTagName("li");
  var ultimaFruta = listaFrutas.length - 1;
  
  listaOrdenada.removeChild(listaFrutas[ultimaFruta]);
}
