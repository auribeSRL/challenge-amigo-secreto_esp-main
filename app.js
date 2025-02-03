let amigos = [];

let input = document.getElementById('amigo');

function agregarAmigo() {
    const nombre = document.getElementById('amigo').value; 
    if (nombre) {
        limpiarGanador();
        amigos.push(nombre);
        document.getElementById('amigo').value = ''; 
        mostrarAmigos();
    } else {
        alert('Por favor, ingresa un nombre');
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }
    let cantidadJugadores = amigos.length;
    let numeroGenerado = Math.floor(Math.random() * cantidadJugadores);
    limpiarAmigos();
    document.getElementById('resultado').textContent = `El amigo secreto sorteado es: ${amigos[numeroGenerado]}`; 
    limpiarArreglo();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo) {
      const li = document.createElement('li');
      li.textContent = amigo;
      lista.appendChild(li);
    });
  }

function limpiarAmigos(){
    document.getElementById('listaAmigos').textContent = '';
}

function limpiarArreglo(){
    amigos = [];
}

function limpiarGanador(){
    document.getElementById('resultado').textContent = '';
}


