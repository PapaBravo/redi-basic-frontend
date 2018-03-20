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
function createColorElement(color) {
    var colorElement = document.createElement('li');
    colorElement.textContent = color;
    colorElement.style.backgroundColor = color;

    var btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove ' + color;
    btnRemove.onclick = function () {
        colorElement.remove();
    }
    colorElement.appendChild(btnRemove);
    return colorElement;
}

function getSelectColor(selectId) {
    var options = document.querySelectorAll(selectId + ' option');
    console.log(options);
    for(var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            return options[i].value;
        } 
    }
}

function addColor() {
    // var newColor = document.querySelector('#txtNewColor').value;
    var newColor = getSelectColor('#selectNewColor');
    var colorList = document.querySelector('#colorList');
    var newEl = createColorElement(newColor);
    colorList.appendChild(newEl);
}