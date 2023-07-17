//pegando vetores do localStore
usuarioLogado = JSON.parse(localStorage.getItem('usuario'))
vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

let = nomeUsuario = document.getElementById("nome-usuario")
let = cpfUsuario = document.getElementById("cpf-usuario")
let = emailUsuario = document.getElementById("email-usuario")
let = nacionalidadeUsuario = document.getElementById("nacionalidade-usuario")
let = dataUsuario = document.getElementById("data-usuario")

nomeUsuario.innerHTML = usuarioLogado.username
cpfUsuario.innerHTML = usuarioLogado.cpfUsu
emailUsuario.innerHTML = usuarioLogado.emailUsu
nacionalidadeUsuario.innerHTML = usuarioLogado.nationality
dataUsuario.innerHTML = usuarioLogado.date

// function EditarConta(){
     
// }

function ExcluirConta(){
    for(i=0;i<vetorUsers.length;i++){
        if(usuarioLogado.cpfUsu == vetorUsers[i].cpfUsu){
            vetorUsers.pop()
            alert("Perfil Deletado!")
            console.log(usuarioLogado.cpfUsu)
            console.log(vetorUsers.cpfUsu)
        }
    }
}

localStorage.setItem('usuario', JSON.stringify(usuarioLogado))
localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))

function pagHome(){
    window.location.href = "PaginaInicial.html";
}

function pagCad(){
    window.location.href = "cadastro.html";
}