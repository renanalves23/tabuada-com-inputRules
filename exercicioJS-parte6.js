function tabuada() {
  var num = document.getElementById('txtn')
  //seleciona tab para compilar a tabuada
  var tab = document.getElementById('seltab')

  //condição 
  if (num.value == 0) {
    window.alert('ERRO, Digite um número')
  }else {
    var n = Number(num.value)
    tab.innerHTML = ''
    for (c = 1; c <= 10; c++) {
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      //option precisa ter value definido
      item.value = `tab${c}`
      //mostrar na página
      tab.appendChild(item)
    }
  }
}

/** 
function tabuada() {
  //pega número que está em formato texto
  let num = document.getElementById('txtn')
  //pega select
  let tab = document.getElementById('seltab')

  //condição para validação de dados inseridos
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número")
  }else {
    //transforma para numero para JS ler
  let n = Number(num.value) 
  let c = 1 
  //limpar área da tabuada
  tab.innerHTML = ''
  while (c <= 10) {
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}` 
    //adicionando value ao option / é obrigatório para validação em outras linguagens
    item.value = `tab${c}`
    //para mostrar na pagina
    tab.appendChild(item)
    //no while, o acréscimo ou decréscimo vem depois
    c++
  }
  }
  
}
*/