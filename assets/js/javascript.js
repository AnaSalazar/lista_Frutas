var frutas = []; //arreglo vacio para guardar mi lista
function agregarFruta(){
    var fruta=document.getElementById("fruta").value; //valor traido del input
    frutas.push(fruta);//si no pongo el push antes de lo siguiente no funciona de manera correcta
    var longitud = frutas.length;
    var texto = ""; //string vacio para "guardar" lo que se va a imprimir

    for(var i = 0; i < longitud; i++){
        texto += "<li>" + frutas[i] + "</li>";
    }
    document.getElementById("lista").innerHTML = texto;
}
