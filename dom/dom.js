console.log('Starting DOM manipulation');

var btnColor = document.querySelector('#btnChangeColor');
console.log(btnColor);

function rand(n) {
    return Math.floor(Math.random() * (n + 1));
}

function changeBodyColor() {
    var colors = [rand(255), rand(255), rand(255)];
    var clrString = colors.join(',');
    var rndClr = `rgb(${clrString})`;
    console.log(rndClr);
    document.body.style.backgroundColor = rndClr;
}

btnColor.onclick = changeBodyColor;

btnColor.addEventListener('mouseover', changeBodyColor);

/******** SEARCH ********/

var outputSearch = document.querySelector('#searchOutput');
var inputSearch = document.querySelector('#txtSearch');
var btnSearch = document.querySelector('#btnSearch');

var contacts = ['Chris', 'Sarah', 'Bill', 'Mary'];

btnSearch.onclick = function () {
    var searchName = inputSearch.value;
    console.log(searchName);

    var position = contacts.indexOf(searchName);
    console.log(position);
    if (position >= 0) {
        outputSearch.textContent = searchName +
            '\'s position is ' + position;
    } else {
        outputSearch.textContent = 'Could not find ' +
            searchName;
    }
}

/****** Adding to the DOM *****/
function buildNewColorElement(color) {
    var colorElement = document.createElement('li');
    colorElement.textContent = color;
    colorElement.style.backgroundColor = color;

    var btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    btnRemove.onclick = () => colorElement.remove();
    colorElement.appendChild(btnRemove);
    return colorElement;
}

function addColor(color) {
    var newColor = document
        .querySelector('#txtNewColor')
        .value;

    var colorList = document.querySelector("#colorList");
    // in addColor
    var newEl = buildNewColorElement(newColor);
    colorList.appendChild(newEl);
}