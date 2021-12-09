window.addEventListener('load', main);

function main() {
    renderCurrentDay();
    renderCurrentDate();
    endOfDateFix();
}

function renderCurrentDay() {
    const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    const d = new Date();
    document.getElementById('currentweekday').innerHTML = weekday[d.getDay()];
}

function endOfDateFix(i) {
    var j = i % 10;
    if (j == 1 || j == 2) {
        return i + ":a";
    }
    return i + ":e";
}

function renderCurrentDate() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    const d = new Date();

    document.getElementById('currentdate').innerHTML = endOfDateFix(d.getDate()) + " " + month[d.getMonth()] + " " + d.getFullYear();

}
