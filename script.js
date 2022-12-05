function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    if (minutos < 10) {
        minutos = '0' + minutos
    }
    var segundos = data.getSeconds();
    if (segundos < 10) {
        segundos = '0' + segundos
    }
    // var hora = 10 //teste
    msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`;
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = './img/manha.jpg'

    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = './img/tarde.jpg'
    } else {
        //Boa noite
        img.src = './img/noite.jpg'
    }
    randomBgColor()
}
setInterval(carregar, 1000)


const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
function randomBgColor() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateColor()];
        // console.log(hexColor)
    }
    // color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function generateColor() {
    return Math.floor(Math.random() * hex.length);
}


