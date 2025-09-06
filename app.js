let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    if (amigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(amigo);
    document.getElementById('amigo').value = '';
    
    // Llama a la función para mostrar la lista
    mostrarAmigos();
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Recorrer el array y agregar los nombres a la lista
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    // 1. Validar que haya al menos dos amigos disponibles para sortear
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos nombres para realizar el sorteo.');
        return; // Detiene la función si no hay suficientes nombres
    }
    
    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado usando el índice
    let amigoSecreto = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado en el HTML
    document.getElementById('resultado').innerHTML = `<ul class="result-list"><li>¡El amigo secreto es: ${amigoSecreto}!</li></ul>`;
}