const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function newTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.textContent = fixTime(hours);
    minutesElement.textContent = fixTime(minutes);
    secondsElement.textContent = fixTime(seconds);
}

// RETIRANDO O ERRO DO "0"
function fixTime(time) {
    return time < 10 ? '0' + time : time
}

// ATUALIZANDO RELOGIO EM 1S 
newTime();
setInterval(newTime, 1000);
