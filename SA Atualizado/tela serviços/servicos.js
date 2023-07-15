function navegarParaPaginaDeDestinoIni() {
    // Impede que o link de destino seja seguido automaticamente
    event.preventDefault();
  
    // Obtém o link de destino
    var linkDeDestino = event.target.href;
  
    // Faz a transição para a página de destino
    window.location.href = "PaginaInicial.html";
    
    // Retorna false para evitar que o link de destino seja seguido novamente
    return false;
  }

  function navegarParaPaginaDeDestinoCad() {
    // Impede que o link de destino seja seguido automaticamente
    event.preventDefault();
  
    // Obtém o link de destino
    var linkDeDestino = event.target.href;
  
    // Faz a transição para a página de destino
    window.location.href = "Paginacadastro.html";
    
    // Retorna false para evitar que o link de destino seja seguido novamente
    return false;
  }

  function navegarParaPaginaDeDestinoCom() {
    // Impede que o link de destino seja seguido automaticamente
    event.preventDefault();
  
    // Obtém o link de destino
    var linkDeDestino = event.target.href;
  
    // Faz a transição para a página de destino
    window.location.href = "Paginacompra.html";
    
    // Retorna false para evitar que o link de destino seja seguido novamente
    return false;

    
  }
  

  function mostrarCompra(){
    document.getElementById('divComprar').style.display = 'block'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'none'

  }
  function mostrarVenda(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'block'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'none'
    
  }
  function mostrarRetirada(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'block'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'none'
    
  }
  function mostrarDelivery(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'block'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'none'
    
  }
  function mostrarcartao(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'block'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'none'
    
  }
  function mostrarLocalizacao(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'block'
    document.getElementById('divMoedas').style.display = 'none'
    
  }
  function mostrarmoedas(){
    document.getElementById('divComprar').style.display = 'none'
    document.getElementById('divVender').style.display = 'none'
    document.getElementById('divRetirada').style.display = 'none'
    document.getElementById('divDelivery').style.display = 'none'
    document.getElementById('divCartao').style.display = 'none'
    document.getElementById('divlocalizacao').style.display = 'none'
    document.getElementById('divMoedas').style.display = 'block'
    
  }
  function mostrarbandeiraA() {
    var selectServicosA = document.getElementById("selectServicosA").value;
  
    switch (selectServicosA) {
  
      case "0":
        document.getElementById("bandeiraBranca").style.display = "block";
        document.getElementById("bandeiraUSD").style.display = "none";
        document.getElementById("bandeiraBRL").style.display = "none";
        document.getElementById("bandeiraISO").style.display = "none";
        document.getElementById("bandeiraCLP").style.display = "none";
        document.getElementById("bandeiraGPB").style.display = "none";
        break;
  
      case "0.208":
        document.getElementById("bandeiraBranca").style.display = "none";
        document.getElementById("bandeiraUSD").style.display = "block";
        document.getElementById("bandeiraBRL").style.display = "none";
        document.getElementById("bandeiraISO").style.display = "none";
        document.getElementById("bandeiraCLP").style.display = "none";
        document.getElementById("bandeiraGPB").style.display = "none";
        break;
  
      case "1":
        document.getElementById("bandeiraBranca").style.display = "none";
        document.getElementById("bandeiraUSD").style.display = "none";
        document.getElementById("bandeiraBRL").style.display = "block";
        document.getElementById("bandeiraISO").style.display = "none";
        document.getElementById("bandeiraCLP").style.display = "none";
        document.getElementById("bandeiraGPB").style.display = "none";
        break;

      case "55.249":
        document.getElementById("bandeiraBranca").style.display = "none";
        document.getElementById("bandeiraUSD").style.display = "none";
        document.getElementById("bandeiraBRL").style.display = "none";
        document.getElementById("bandeiraISO").style.display = "block";
        document.getElementById("bandeiraCLP").style.display = "none";
        document.getElementById("bandeiraGPB").style.display = "none";
      break;

        case "169.492":
        document.getElementById("bandeiraBranca").style.display = "none";
        document.getElementById("bandeiraUSD").style.display = "none";
        document.getElementById("bandeiraBRL").style.display = "none";
        document.getElementById("bandeiraISO").style.display = "none";
        document.getElementById("bandeiraCLP").style.display = "block";
        document.getElementById("bandeiraGPB").style.display = "none";
        break;

      case "0.159":
        document.getElementById("bandeiraBranca").style.display = "none";
        document.getElementById("bandeiraUSD").style.display = "none";
        document.getElementById("bandeiraBRL").style.display = "none";
        document.getElementById("bandeiraISO").style.display = "none";
        document.getElementById("bandeiraCLP").style.display = "none";
        document.getElementById("bandeiraGPB").style.display = "block";
        break;
    }
  }

  function mostrarbandeiraB() {
    var selectServicosB = document.getElementById("selectServicosB").value;
  
    switch (selectServicosB) {
  
      case "0":
        document.getElementById("bandeiraBranca2").style.display = "block";
        document.getElementById("bandeiraUSD2").style.display = "none";
        document.getElementById("bandeiraBRL2").style.display = "none";
        document.getElementById("bandeiraISO2").style.display = "none";
        document.getElementById("bandeiraCLP2").style.display = "none";
        document.getElementById("bandeiraGPB2").style.display = "none";
        break;
  
      case "0.208":
        document.getElementById("bandeiraBranca2").style.display = "none";
        document.getElementById("bandeiraUSD2").style.display = "block";
        document.getElementById("bandeiraBRL2").style.display = "none";
        document.getElementById("bandeiraISO2").style.display = "none";
        document.getElementById("bandeiraCLP2").style.display = "none";
        document.getElementById("bandeiraGPB2").style.display = "none";
        break;
  
      case "1":
        document.getElementById("bandeiraBranca2").style.display = "none";
        document.getElementById("bandeiraUSD2").style.display = "none";
        document.getElementById("bandeiraBRL2").style.display = "block";
        document.getElementById("bandeiraISO2").style.display = "none";
        document.getElementById("bandeiraCLP2").style.display = "none";
        document.getElementById("bandeiraGPB2").style.display = "none";
        break;

      case "55.249":
        document.getElementById("bandeiraBranca2").style.display = "none";
        document.getElementById("bandeiraUSD2").style.display = "none";
        document.getElementById("bandeiraBRL2").style.display = "none";
        document.getElementById("bandeiraISO2").style.display = "block";
        document.getElementById("bandeiraCLP2").style.display = "none";
        document.getElementById("bandeiraGPB2").style.display = "none";
      break;

        case "169.492":
        document.getElementById("bandeiraBranca2").style.display = "none";
        document.getElementById("bandeiraUSD2").style.display = "none";
        document.getElementById("bandeiraBRL2").style.display = "none";
        document.getElementById("bandeiraISO2").style.display = "none";
        document.getElementById("bandeiraCLP2").style.display = "block";
        document.getElementById("bandeiraGPB2").style.display = "none";
        break;

      case "0.159":
        document.getElementById("bandeiraBranca2").style.display = "none";
        document.getElementById("bandeiraUSD2").style.display = "none";
        document.getElementById("bandeiraBRL2").style.display = "none";
        document.getElementById("bandeiraISO2").style.display = "none";
        document.getElementById("bandeiraCLP2").style.display = "none";
        document.getElementById("bandeiraGPB2").style.display = "block";
        break;
    }
  }
  
  function mostrarbandeiraC() {
    var selectServicosC = document.getElementById("selectServicosC").value;
  
    switch (selectServicosC) {
  
      case "0":
        document.getElementById("bandeiraBranca3").style.display = "block";
        document.getElementById("bandeiraUSD3").style.display = "none";
        document.getElementById("bandeiraBRL3").style.display = "none";
        document.getElementById("bandeiraISO3").style.display = "none";
        document.getElementById("bandeiraCLP3").style.display = "none";
        document.getElementById("bandeiraGPB3").style.display = "none";
        break;
  
      case "0.208":
        document.getElementById("bandeiraBranca3").style.display = "none";
        document.getElementById("bandeiraUSD3").style.display = "block";
        document.getElementById("bandeiraBRL3").style.display = "none";
        document.getElementById("bandeiraISO3").style.display = "none";
        document.getElementById("bandeiraCLP3").style.display = "none";
        document.getElementById("bandeiraGPB3").style.display = "none";
        break;
  
      case "1":
        document.getElementById("bandeiraBranca3").style.display = "none";
        document.getElementById("bandeiraUSD3").style.display = "none";
        document.getElementById("bandeiraBRL3").style.display = "block";
        document.getElementById("bandeiraISO3").style.display = "none";
        document.getElementById("bandeiraCLP3").style.display = "none";
        document.getElementById("bandeiraGPB3").style.display = "none";
        break;

      case "55.249":
        document.getElementById("bandeiraBranca3").style.display = "none";
        document.getElementById("bandeiraUSD3").style.display = "none";
        document.getElementById("bandeiraBRL3").style.display = "none";
        document.getElementById("bandeiraISO3").style.display = "block";
        document.getElementById("bandeiraCLP3").style.display = "none";
        document.getElementById("bandeiraGPB3").style.display = "none";
      break;

        case "169.492":
        document.getElementById("bandeiraBranca3").style.display = "none";
        document.getElementById("bandeiraUSD3").style.display = "none";
        document.getElementById("bandeiraBRL3").style.display = "none";
        document.getElementById("bandeiraISO3").style.display = "none";
        document.getElementById("bandeiraCLP3").style.display = "block";
        document.getElementById("bandeiraGPB3").style.display = "none";
        break;

      case "0.159":
        document.getElementById("bandeiraBranca3").style.display = "none";
        document.getElementById("bandeiraUSD3").style.display = "none";
        document.getElementById("bandeiraBRL3").style.display = "none";
        document.getElementById("bandeiraISO3").style.display = "none";
        document.getElementById("bandeiraCLP3").style.display = "none";
        document.getElementById("bandeiraGPB3").style.display = "block";
        break;
    }
  }

  function mostrarbandeiraD() {
    var selectServicosD = document.getElementById("selectServicosD").value;
  
    switch (selectServicosD) {
  
      case "0":
        document.getElementById("bandeiraBranca4").style.display = "block";
        document.getElementById("bandeiraUSD4").style.display = "none";
        document.getElementById("bandeiraBRL4").style.display = "none";
        document.getElementById("bandeiraISO4").style.display = "none";
        document.getElementById("bandeiraCLP4").style.display = "none";
        document.getElementById("bandeiraGPB4").style.display = "none";
        break;
  
      case "0.208":
        document.getElementById("bandeiraBranca4").style.display = "none";
        document.getElementById("bandeiraUSD4").style.display = "block";
        document.getElementById("bandeiraBRL4").style.display = "none";
        document.getElementById("bandeiraISO4").style.display = "none";
        document.getElementById("bandeiraCLP4").style.display = "none";
        document.getElementById("bandeiraGPB4").style.display = "none";
        break;
  
      case "1":
        document.getElementById("bandeiraBranca4").style.display = "none";
        document.getElementById("bandeiraUSD4").style.display = "none";
        document.getElementById("bandeiraBRL4").style.display = "block";
        document.getElementById("bandeiraISO4").style.display = "none";
        document.getElementById("bandeiraCLP4").style.display = "none";
        document.getElementById("bandeiraGPB4").style.display = "none";
        break;

      case "55.249":
        document.getElementById("bandeiraBranca4").style.display = "none";
        document.getElementById("bandeiraUSD4").style.display = "none";
        document.getElementById("bandeiraBRL4").style.display = "none";
        document.getElementById("bandeiraISO4").style.display = "block";
        document.getElementById("bandeiraCLP4").style.display = "none";
        document.getElementById("bandeiraGPB4").style.display = "none";
      break;

        case "169.492":
        document.getElementById("bandeiraBranca4").style.display = "none";
        document.getElementById("bandeiraUSD4").style.display = "none";
        document.getElementById("bandeiraBRL4").style.display = "none";
        document.getElementById("bandeiraISO4").style.display = "none";
        document.getElementById("bandeiraCLP4").style.display = "block";
        document.getElementById("bandeiraGPB4").style.display = "none";
        break;

      case "0.159":
        document.getElementById("bandeiraBranca4").style.display = "none";
        document.getElementById("bandeiraUSD4").style.display = "none";
        document.getElementById("bandeiraBRL4").style.display = "none";
        document.getElementById("bandeiraISO4").style.display = "none";
        document.getElementById("bandeiraCLP4").style.display = "none";
        document.getElementById("bandeiraGPB4").style.display = "block";
        break;
    }

}


function calcularMoeda() {
  let selectA = document.getElementById("selectServicosA");
  let selectB = document.getElementById("selectServicosB");
  let inputAlto = document.getElementById("textComprarAlto");
  let inputBaixo = document.getElementById("textComprarBaixo");
  let MenuTaxas = document.getElementById("MenuTaxas");

  
  let moedaA = selectA.options[selectA.selectedIndex].value;
  let moedaB = selectB.options[selectB.selectedIndex].value;

  
  let cotacao = document.getElementById("selectServicosB").value;; 
  let valorAlto = parseFloat(inputAlto.value);
  let valorBaixo = valorAlto * cotacao;
  let iof = (valorAlto/100)*1.10
  let taxaADM = 4.99
  let valorCompra = (iof + taxaADM) + valorBaixo

  inputBaixo.value = valorBaixo.toFixed(2); 
  //MenuTaxas.innerText = "Valor Comercial: " + valorBaixo.toFixed(2) + "IOF(1,10%): " + iof.toFixed(2) + "Taxa Administrativa: " + taxaADM.toFixed(2)
  MenuTaxas.innerText = `Valor Comercial:   ${valorBaixo.toFixed(2)}$ \n  IOF(1,10%): ${iof.toFixed(2)}$ \n Taxa Administrativa:   ${ taxaADM.toFixed(2)}$ \n Valor Da Compra:   ${valorCompra.toFixed(2)}$ \n Câmbio final (VET):   ${valorCompra.toFixed(2)}$ `
}


function calcularMoeda2() {
  let selectC = document.getElementById("selectServicosC");
  let selectD = document.getElementById("selectServicosD");
  let inputAlto2 = document.getElementById("textVenderAlto");
  let inputBaixo2 = document.getElementById("textVenderBaixo");
  let MenuTaxas2 = document.getElementById("MenuTaxas2");

  
  let moedaC = selectC.options[selectC.selectedIndex].value;
  let moedaD = selectD.options[selectD.selectedIndex].value;

  
  let cotacao2 = document.getElementById("selectServicosD").value;; 
  let valorAlto2 = parseFloat(inputAlto2.value);
  let valorBaixo2 = valorAlto2 * cotacao2;
  let iof2 = (valorAlto2/100)*0.38
  let valorCompra2 = valorBaixo2 - iof2

  inputBaixo2.value = valorBaixo2.toFixed(2); 
  MenuTaxas2.innerText = `Valor Comercial:   ${valorBaixo2.toFixed(2)}$ \n  IOF(1,10%): ${iof2.toFixed(2)}$ \n Valor Da Compra:   ${valorCompra2.toFixed(2)}$ \n Câmbio final (VET):   ${valorCompra2.toFixed(2)}$ `

}
