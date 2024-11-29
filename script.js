/* Função de Mudar a Camisa */
function trocaCamisa(e) {
    document.querySelector('#camisa').src = e;
}

/* Função de Mudar a Cor do cicle */
function circleChange(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;    
}