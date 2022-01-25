//Global variables
const dmy = new Date();
const d = dmy.getDate();
const m = dmy.getMonth() + 1;
const y = dmy.getFullYear();

window.addEventListener('load', main);

function main() {
    addItemEvent();
    datePickerMin();
}

function addItemEvent() {
    let form = document.getElementById('this-form');
    form.addEventListener('submit', checkIfEmpty);
}

function checkIfEmpty(event) {
    event.preventDefault();
    if (document.getElementById('todo-input').value === "") {
        alert('Beskriv vad du vill lägga till.');
    } else {
        addItem();
    }
}

function addItem() {
    const list = document.getElementById('todo-list');
    const todo = document.getElementById('todo-input').value;
    const date = document.getElementById('date-picker').value;
    const added = document.createElement('li');
    added.id = 'list-item-id';
    let divList = document.createElement('div');
    divList.innerText = todo + ' ' + date;
    divList.className = 'divList';
    let divClose = document.createElement('div');
    divClose.innerText = 'X';
    divClose.id = 'divClose';
    added.appendChild(divList);
    added.appendChild(divClose);
    list.appendChild(added);
    document.getElementById('todo-input').value = '';
    divList.addEventListener('click', dashItem);
    divClose.addEventListener('click', removeItem);
    todoCounter();
}

//Set counter to specific date
function todoCounter() {
    //const allDaysOfCurrentMonth = document.getElementsByClassName('day');
    const allAmounts = document.getElementsByClassName('amount')

    let inputValue = document.getElementById('date-picker').value;
    let inputDayNr = inputValue.substr(8, 9);
    let inputYearMonth = inputValue.substr(0, 7);
    //todoDeadLine for reading which date the todo should be added to. nrDiv is an array of the amount divs on each day, getting the specific date with same process as todoDeadline.
    //let todoDeadLine = allDaysOfCurrentMonth[inputDayNr - 1]
    let nrDiv = allAmounts[inputDayNr - 1]
    let nrOfTodos = Number(nrDiv.innerText)


    let jsYearMonth;

    //In order to get correct syntax between html input and js date.
    if (m <= 9) {
        jsYearMonth = `${y}-0${m}`;
    } else {
        jsYearMonth = `${y}-${m}`;
    }
    //js date compared to html date, if same year/month then counter is added to specific date
    if (jsYearMonth === inputYearMonth) {
        nrOfTodos++
        nrDiv.innerHTML = (`${nrOfTodos}`)
        
        listDate();
    } else {
        return;
    }
}

//count the todo list items that end with same date, add the count to calendar counter 🤷‍♂️
function listDate() {
    let listItems = document.querySelectorAll('.divList')

    console.log(listItems[listItems.length - 1].innerText)
}

function dashItem(event) {
    event.target.classList.toggle('finished');
}

function removeItem(event) {
    event.target.parentNode.remove();
    todoCounter();
}

//date picker min value is current date
function datePickerMin() {
    const datePickerSpan = document.getElementById('date-picker-span');

    if (d <= 9 && m <= 9) {
        datePickerSpan.innerHTML = `<input id="date-picker" value="${y}-0${m}-0${d}" type="date" min="${y}-0${m}-0${d}">`;
    } else if (m > 9 && d > 9) {
        datePickerSpan.innerHTML = `<input id="date-picker" value="${y}-${m}-${d}" type="date" min="${y}-${m}-${d}">`;
    } else if (d <= 9) {
        datePickerSpan.innerHTML = `<input id="date-picker" value="${y}-${m}-0${d}" type="date" min="${y}-${m}-0${d}">`;
    } else {
        datePickerSpan.innerHTML = `<input id="date-picker" value="${y}-0${m}-${d}" type="date" min="${y}-0${m}-${d}">`;
    }
}