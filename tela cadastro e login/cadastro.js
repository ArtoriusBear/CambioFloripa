let nome = document.getElementById("nome")
let telefone = document.getElementById("telefone")
let nacionalidade = document.getElementById("nacionalidade")
let cpf = document.getElementById("cpf")
let email = document.getElementById("email")
let endereco = document.getElementById("endereco")
let senha = document.getElementById("senha")
let confirmarSenha = document.getElementById("confirmarSenha")
let data = document.getElementById("data")

let divBotao = document.getElementById("div-botao") 

let vetorUsers = []

    
function CadastraUser(){

   if(senha.value == confirmarSenha.value){   
    let usuario = {
    
        username: '',
        password: '',
        confirmarPassword: '',
        telephone: '',
        nationality: '',
        cpfUsu: '',
        emailUsu: '',
        address: '',
        date: '',
        
    }
    
    usuario.username = nome.value
    usuario.password = senha.value
    usuario.confirmarPassword = confirmarSenha.value
    usuario.telephone =  telefone.value
    usuario.nationality = nacionalidade.value
    usuario.cpfUsu = cpf.value
    usuario.emailUsu = email.value
    usuario.address = endereco.value
    usuario.date = data.value

    
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    
    if(vetorUsers == null){
    
        vetorUsers = []
    
        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
    
    }else{
    
        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
    
    }
    senhaDiferente.innerHTML = ""
    LimpaInputs()
  }else{
    senhaDiferente.innerHTML += "As senhas não são iguais"
  }    
}

function LimpaInputs(){

    nome.value = ''
    senha.value = ''
    confirmarSenha.value = ''
    telefone.value = ''
    nacionalidade.value = ''
    cpf.value = ''
    email.value = ''
    endereco.value = ''
    data.value = ''

}

function TrocarLogin(){
  window.location.href = "index.html"
}