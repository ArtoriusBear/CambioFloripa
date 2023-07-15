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


//login

let usuarioLogado = {

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

let cpfLogin = document.getElementById("inpt-cpf")
let senhaLogin = document.getElementById("inpt-senha")

function Logar(){

  // Pega valores do LocalStorage (se tiver) e armazena
  vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

  // Cria uma variável ou flag para indicar que logou
  let logou = 0

  // Realiza um loop do tamanho dos vetores
  for(i=0; i < vetorUsers.length; i++){

    if(cpfLogin.value == vetorUsers[i].cpfUsu && senhaLogin.value == vetorUsers[i].password){

      //pega o usuario do vetor
      usuarioLogado.username = vetorUsers[i].username
      usuarioLogado.password = vetorUsers[i].password
      usuarioLogado.confirmarPassword = vetorUsers[i].confirmarPassword
      usuarioLogado.telephone =  vetorUsers[i].telephone
      usuarioLogado.nationality = vetorUsers[i].nationality
      usuarioLogado.cpfUsu = vetorUsers[i].cpfUsu
      usuarioLogado.emailUsu = vetorUsers[i].emailUsu
      usuarioLogado.address = vetorUsers[i].address
      usuarioLogado.date = vetorUsers[i].date

      localStorage.setItem('usuario', JSON.stringify(usuarioLogado))

      logou = 1
    }

}
 
  if (logou == 1){

        alert("Login efetuado!")
        // Pula para a página Principal
        //window.location.href = 

  }else{

        // Senão, mostra mensagem de login falhou
        alert("Login falhou!")

  }   

}