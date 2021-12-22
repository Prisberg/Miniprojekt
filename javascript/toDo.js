window.addEventListener('load', main);

function main() {
    addItemEvent();
    todoCounterRender();
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
    let list = document.getElementById('todo-list')
    let todo = document.getElementById('todo-input').value;
    let added = document.createElement('li');
    added.id = 'list-item-id';
    let divList = document.createElement('div');
    divList.innerText = todo;
    divList.id = 'divList';
    let divClose = document.createElement('div');
    divClose.innerText = 'X';
    divClose.id = 'divClose';
    added.appendChild(divList);
    added.appendChild(divClose);
    list.appendChild(added);
    document.getElementById('todo-input').value = '';
    divList.addEventListener('click', dashItem);
    divClose.addEventListener('click', removeItem)
    todoCounter();
}

function todoCounterRender() {
    let today = document.querySelector('.today');
    let amount = document.createElement('div');
    amount.id = 'amount';
    today.appendChild(amount);
}

function todoCounter() {
    let listSize = document.querySelectorAll('li').length;
    if (listSize === 0) {
        amount.innerText = '';
    } else {
        amount.innerText = listSize;
    }
}

function dashItem(event) {
    event.target.classList.toggle('finished');
}

function removeItem(event) {
    event.target.parentNode.remove();
    todoCounter();
}