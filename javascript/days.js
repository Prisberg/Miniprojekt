window.addEventListener('load', main);

function main() {
    renderCurrentTime();
    renderCurrentDay();
    renderCurrentDate();
    endOfDateFix();
    renderCurrentMonth();
    setInterval(renderCurrentTime, 1000);
}

function renderCurrentDay() {
    const weekday = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    document.getElementById('currentweekday').innerHTML = "Idag är det " + weekday[dmy.getDay()];
}

function endOfDateFix(i) {
    var j = i % 10;
    if (j == 1 && i != 11 || j == 2 && i != 12) {
        return i + ":a";
    }
    return i + ":e";
}

function renderCurrentDate() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    document.getElementById('currentdate').innerHTML = endOfDateFix(dmy.getDate()) + " " + month[dmy.getMonth()] + " " + dmy.getFullYear();

}

function renderCurrentMonth() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    document.getElementById('currentmonth').innerHTML = month[dmy.getMonth()];
}

function renderCurrentTime() {
    document.getElementById('currenttime').innerHTML = "och klockan är " + dmy.toLocaleTimeString() + ".";
}

function showNextMonth() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    document.getElementById('next-month').innerHTML = month[dmy.getMonth()] - 1;
}