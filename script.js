let convidados = []

function inserir() {
    let nomeConvidado = document.getElementById("convidado").value
    if (nomeConvidado == "") {
        alert("Digite o nome do convidado")
    } else {
        convidados.push(nomeConvidado)
        imprimir()
    }
}
function imprimir() {
    let tabela = document.getElementById("tabela")
    let cacheTabela = ""
    tabela.innerHTML = ""

    for (let i = 0; i < convidados.length; i++) {
        cacheTabela += "<tr><td>" + convidados[i] + "</td></tr>"
    }
    tabela.innerHTML = cacheTabela
    
}
