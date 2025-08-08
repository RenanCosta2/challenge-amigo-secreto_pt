let amigos = []

function adicionarAmigo(){
    nome_amigo = document.getElementById("amigo").value
    
    if(nome_amigo == ""){
        alert("Por favor, insira um nome.")
    } else{
        amigos.push(nome_amigo)
        document.getElementById("amigo").value = ""
    }
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let amigo of amigos){
        let li = document.createElement("li")
        li.textContent = amigo
        lista.appendChild(li)
    }
}

function sortearAmigo(){
    qtd_amigos = amigos.length
    if(qtd_amigos != 0){
        numero_sorteado = Math.floor(Math.random() * qtd_amigos)
        amigo_sorteado = amigos[numero_sorteado]

        sorteado = document.getElementById("resultado")
        sorteado.innerHTML = amigo_sorteado
    } else{
        alert("Por favor, adicione amigos antes de sortear.")
    }
}