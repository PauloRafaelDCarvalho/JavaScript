var agora = new Date()
var hora = agora.getHours()
var minutos = new Date()
var contagem = minutos.getMinutes()

console.log(`Hora atual é exatamente ${hora}:${contagem} !`)
if (hora <= 12){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa tarde')
}else if (hora <= 23) {
    console.log('Boa noite')
}else if (hora = 0) {
    console.log('Boa madrugada')
}
