let nombresAmigos = []

function agregarAmigo() {
    const amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
    }
    else {
    nombresAmigos.push(amigo);
    mostrarLista()
    }
    document.getElementById("amigo").value = "";
}

function mostrarLista (){
const lista = document.getElementById("listaAmigos");
lista.innerHTML = "";

nombresAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
});
}


function sortearAmigo() {
  if (nombresAmigos.length === 0) {
    alert(" La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const indice = Math.floor(Math.random() * nombresAmigos.length);
  const ganador = nombresAmigos[indice];

  document.getElementById("resultado").textContent =
    ` El amigo secreto es: ${ganador}`;
}