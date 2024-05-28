//AULA DE CONDIÇÕES 2

//CÓDIGO QUE FIZ!!! Preciso aprimirar!
/*
var porta = '' //(alternar entre aberta, fechada e vazio)

if (porta == 'aberta'){
    console.log('Levar o lixo para fora')
}else if (porta == 'fechada') {
    console.log('Procurar a chave e abrir a porta')
}else {
    console.log('Não deixe o lixo acumular')
}
*/
//-------------------------------------------------//
/*
var hora = 16

console.log(`Agora são exatamente ${hora} horas`)

if (hora <= 12){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa tarde')
}else if (hora <= 23) {
    console.log('Boa noite')
}else if (hora = 24) {
    console.log('Boa madrugada')
}
*/
//*Não esquecer de F8 para rodar node.js */
//Pegando hora do sistema

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