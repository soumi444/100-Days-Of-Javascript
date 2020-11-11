var count = 0;

function high() {
    count += 1;
    document.getElementById('content').textContent = count;
}

function low() {
    count -= 1;
    document.getElementById('content').innerHTML = count;
}

