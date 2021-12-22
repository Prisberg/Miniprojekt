window.addEventListener('load', main);

function main() {
    renderOldDays();
    renderGrid();
}

function renderOldDays() {
    let d = new Date();
    let m = d.getMonth();
    let y = d.getFullYear();
    let fd = new Date(y, m, 1).getDay();
    for (i = 1; i < fd; i++) {
        let oldday = document.createElement('div');
        //oldday.id = 'oldday';
        document.getElementById('day-grid').appendChild(oldday);
    }
}

function renderGrid() {
    let d = new Date();
    let prevm = d.getMonth();
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    days = new Date(y, m, 0).getDate();

    for (let i = 1; i <= days; i++) {
        let day = document.createElement('div');
        day.innerText = i;
        document.getElementById('day-grid').appendChild(day);
        if (i === d.getDate()) {
            day.className = 'today';
        } else {
            day.id = 'day';
        }
    };
}