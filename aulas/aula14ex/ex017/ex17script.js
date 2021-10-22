function calcular(){
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0){
        alert('Escolha um número')
    } else {
        let n = Number(numero.value)
        tabuada.innerHTML = ''
        for(let c = 1; c<= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
            
        }
    }
}