function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha2.png'
        document.body.style.background = '#caeae9'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'fototarde2.png'
        document.body.style.background = '#ff8128'
    } else {
        //Boa Noite
        img.src = 'fotonoite2.png'
        document.body.style.background = '#000441'
    }
}
