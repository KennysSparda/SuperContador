function contar() {
  // Atribuição de componentes HTML em Variáveis
  let txtInicio = document.getElementById('txtInicio')
  let txtFim = document.getElementById('txtFim')
  let txtPasso = document.getElementById('txtPasso')
  let txtResultado = document.getElementById('txtResultado')

  // Tratamento de exceção de campos vazios
  if( txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0 ) {
    txtResultado.innerHTML = "[ERRO]: Preencha todos os campos e tente novamente!"
  } else {
    // Reinício da contagem e mensagem ao usuário
    txtResultado.innerHTML = 'Contando: <br>'

    // Conversão das variáveis para Number
    let inicio = Number(txtInicio.value)
    let fim = Number(txtFim.value)
    let passo = Number(txtPasso.value)

    // Tratamento de exceção para passo igual a zero ou negativo
    if( passo <= 0 ) {
      window.alert('Passo inválido! Considerando PASSO 1')
    }

    // Bifurcação para contagem CRESCENTE e DECRESCENTE
    if( inicio < fim ) {
      // Contagem crescente
      for(let contador = inicio; contador <= fim; contador += passo) {
        txtResultado.innerHTML += `${contador} \u{1F449} `
      }
    } else {
      // Contagem decrescente
      for(let contador = inicio; contador >= fim; contador -= passo) {
        txtResultado.innerHTML += `${contador} \u{1F449} `
      }
    }
    txtResultado.innerHTML += `\u{1F3C1}`
  }
}
