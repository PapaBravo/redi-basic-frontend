console.log('Starting DOM manipulation');

var btn = document.querySelector('#btnChangeColor');
console.log(btn);

function rand(n) {
    return Math.floor(Math.random()*(n +1));
}

function changeBodyColor() {
    var colors = [rand(255), rand(255), rand(255)];
    var clrString = colors.join(',');
    var rndClr = `rgb(${clrString})`;
    console.log(rndClr);
    document.body.style.backgroundColor = rndClr;
}

btn.onclick = changeBodyColor;

btn.addEventListener('mouseover', changeBodyColor);