function contar() {
  var inicio = document.getElementById("inicio").value
  var fim = document.getElementById("fim").value
  var passo = document.getElementById("passo").value
  var res = document.getElementById("res")
  var elem = document.createElement('p')
  
  // Verificando se todos os campos estao preenchidos ( verificando em string )
  if( inicio.length == 0 || fim.length == 0 || passo.length == 0){
    res.innerHTML = "[ERRO]: Preencha todos os campos e tente novamente!"
  } else {

    // Verificando se o 'inicio' e maior que o 'fim' ( convertendo para Number() )
    if( Number(inicio) > Number(fim)) {
      res.innerHTML = "[ERRO]: Inicio menor que o fim!"
    } else {

      // Verificando se o passo e maior que o trajeto
      if( Number(passo) > (Number(fim) - Number(inicio)) ) {
        res.innerHTML = "[ERRO]: Passo maior que a perna!"
      } else {

        // Contador processando
        var contador = Number(inicio)
        while(contador <= Number(fim)) {

          elem.innerHTML += contador
          if ( contador > (Number(fim)-Number(passo)) ) {
            elem.innerHTML += ' 🏁 '
          } else {
            elem.innerHTML += ' 👉 ' 
          }
          contador += Number(passo)
          
        }
        res.innerHTML = 'Contando:'
        res.appendChild(elem)
      }
    }
  }
}