
function MostrarLojas(){
    document.getElementById('div-retirada').style.display = 'block'
    document.getElementById('div-delivery').style.display = 'none'
}

function Endereco(){
    document.getElementById('div-retirada').style.display = 'none'
    document.getElementById('div-delivery').style.display = 'block'
}

function Finalizar(){
      window.location.href = "final.html"
}

function navegarHome(){
    window.location.href = "PaginaInicial.html"
}

function navegarMoedas(){
    window.location.href = "PaginaServicos.html"
}

function navegarCadastro(){
    window.location.href = "cadastro.html"
}