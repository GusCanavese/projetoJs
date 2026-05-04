    
listaProxPagina = []

document.addEventListener("keydown", function(event){
    if (event.key ==='Enter'){
        defineTexto(event)
    } else if(event.key === 'Tab'){
        teste
    }
})

function defineTexto(e){
        let novoItemLista = document.createElement("li")
        let valor = document.getElementById("valor_a_ser_coletado")

        novoItemLista.className = "teste border list-group-item"
        novoItemLista.textContent = valor.value
        listaProxPagina.appendChild(novoItemLista)
        
        document.getElementById("listaParaBotao").appendChild(novoItemLista)
        valor.value=""

}

function testeLista(){
    console.log()
}