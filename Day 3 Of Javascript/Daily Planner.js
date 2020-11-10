const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

//click event
send.addEventListener('click', deliverMessage);

function deliverMessage() {
    let textValue = text.value;
    message.innerHTML = textValue;
}

//second click event
clear.addEventListener('click', clearField);

function clearField() {
    message.innerHTML='';
    text.value = '';
}
