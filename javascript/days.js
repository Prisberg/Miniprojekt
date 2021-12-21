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
    const d = new Date();
    document.getElementById('currentweekday').innerHTML = "Idag är det " + weekday[d.getDay()];
}

function endOfDateFix(i) {
    var j = i % 10;
    if (j == 1 && i != 11 || j == 2 && i != 12)  {
        return i + ":a";
    }
    return i + ":e";
}

function renderCurrentDate() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    const d = new Date();

    document.getElementById('currentdate').innerHTML = endOfDateFix(d.getDate()) + " " + month[d.getMonth()] + " " + d.getFullYear();

}

function renderCurrentMonth() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    const d = new Date();
    
    document.getElementById('currentmonth').innerHTML = month[d.getMonth()];
}

function renderCurrentTime() {
    const d = new Date();

    document.getElementById('currenttime').innerHTML = "och klockan är " + d.toLocaleTimeString() +".";
}

function showNextMonth() {
    const month = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    const d = new Date();
    
    document.getElementById('next-month').innerHTML = month[d.getMonth()] - 1 ;
}