var fs = require('fs')
var funcionarios = null
fs.readFile('funcionarios.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    funcionarios = JSON.parse(data).funcionarios
    console.log('maior salario: ' + JSON.stringify(maiorSalario()))
    console.log(
      'maior salario comerial: ' + JSON.stringify(maiorSalario('Comercial'))
    )

    console.log(
      'maior salario produção: ' + JSON.stringify(maiorSalario('Produção'))
    )
    console.log(
      'maior salario administrativo : ' +
        JSON.stringify(maiorSalario('Administrativo'))
    )
    console.log('menor salario: ' + JSON.stringify(menorSalario()))
    console.log(
      'menor salario comerial: ' + JSON.stringify(menorSalario('Comercial'))
    )
    console.log(
      'menor salario produção: ' + JSON.stringify(menorSalario('Produção'))
    )
    console.log(
      'maior salario administrativo: ' +
        JSON.stringify(menorSalario('Administrativo'))
    )
  }
})

function maiorSalario(setor) {
  var funcmaiorSalario = null
  for (var i = 1; i < funcionarios.length; i++) {
    if (setor && funcionarios[i].setor !== setor) {
      continue
    }

    if (funcmaiorSalario === null) {
      funcmaiorSalario = funcionarios[i]
      continue
    }

    if (funcionarios[i].salario > funcmaiorSalario.salario) {
      funcmaiorSalario = funcionarios[i]
    }
  }

  return funcmaiorSalario
}

function menorSalario(setor) {
  var funcmenorSalario = null
  for (var i = 1; i < funcionarios.length; i++) {
    if (setor && funcionarios[i].setor !== setor) {
      continue
    }

    if (funcmenorSalario === null) {
      funcmenorSalario = funcionarios[i]
      continue
    }

    if (funcionarios[i].salario < funcmenorSalario.salario) {
      funcmenorSalario = funcionarios[i]
    }
  }

  return funcmenorSalario
}
