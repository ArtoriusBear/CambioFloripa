usuarioLogado = JSON.parse(localStorage.getItem('usuario'))


 divNome = document.getElementById("div-nome")
 divEmail = document.getElementById("div-email")
 divCpf = document.getElementById("div-cpf")
 divNacionalidade = document.getElementById("div-nacionalidade")
 divData = document.getElementById("div-data")

 divNome.innerHTML = usuarioLogado.username
 divEmail.innerHTML = usuarioLogado.emailUsu
 divCpf.innerHTML = usuarioLogado.cpfUsu

alert(usuarioLogado.username)
console.log("oi")