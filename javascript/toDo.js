/* Add close button to the right of To do items */
const theToDos = document.querySelectorAll(".toDoItems");
var a;
for (a = 0; a < theToDos.length; a++) {
    const span = document.createElement("span");
    const symbol = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(symbol);
    theToDos[a].appendChild(span);
}

/* close button removes to do*/
const close = document.getElementsByClassName('close')
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const closeParent = this.parentElement;
        closeParent.remove();
    }
}

/* The "Add" button functionality */
const add = document.querySelector('.btnAddToDo')
add.onclick = function() {
        const li = document.createElement("li");
        const inputValue = document.getElementById("toDoTextArea").value;
        const txt = document.createTextNode(inputValue);
        li.appendChild(txt);
        if (inputValue === '') {
            alert("You can't make an empty \"to do\"");
        } else {
            document.getElementById("toDoItemsUL").appendChild(li);
            todoCounter()
        }
        document.getElementById("toDoTextArea").value = "";

        const span = document.createElement("span");
        const symbol = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(symbol);
        li.appendChild(span);

        for (a = 0; a < close.length; a++) {
            close[a].onclick = function() {
                const closeParent = this.parentElement;
                closeParent.remove();
            }
        }
    }
    /* Check function */
const checkList = document.querySelector('.toDoUL');
checkList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

function todoCounter() {
    let todayCell = document.getElementsByClassName("today")
    let listSize = document.querySelectorAll("li").length
    console.log(listSize)
    todayCell.innerHTML = listSize
}