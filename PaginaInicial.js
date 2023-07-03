function navegarParaPaginaDeDestino() {
    // Impede que o link de destino seja seguido automaticamente
    event.preventDefault();
  
    // Obtém o link de destino
    var linkDeDestino = event.target.href;
  
    // Faz a transição para a página de destino
    window.location.href = "PaginaLogin.html";
    
    // Retorna false para evitar que o link de destino seja seguido novamente
    return false;
  }
  