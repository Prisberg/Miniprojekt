window.addEventListener('load', main);

function main() {
    renderOldDays();
    renderGrid();
}

function renderOldDays() {
    let fd = new Date(y, mNoPLus, 1).getDay();

    for (i = 1; i < fd; i++) {
        let oldDay = document.createElement('div');
        document.getElementById('day-grid').appendChild(oldDay);
    }
}

function renderGrid() {
    let days = new Date(y, mNoPLus, 0).getDate(); for (let i = 1; i <= days; i++) {

        let day = document.createElement('div');
        let amountDiv = document.createElement('div')
        amountDiv.className = 'amount'
        day.innerText = i;
        document.getElementById('day-grid').appendChild(day);
        day.appendChild(amountDiv)
        if (i === dmy.getDate()) {
            day.className = 'today day';
        } else {
            day.className = 'day';
        }
    };
}