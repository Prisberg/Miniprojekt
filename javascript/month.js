let calendar = {
    date: new Date(),
    month: null,
    year: null,
    today: null,
};

function renderCalendarMonth() {

    calendar.month = calendar.date.getMonth();
    calendar.year = calendar.date.getFullYear();
    calendar.today = calendar.date.getUTCDate();
    calendar.date.setDate(1);
    renderCalendar();
    renderCalendarHolidays();
}

const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
];

const weekdays = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Tordag",
    "Fredag",
    "Lördag",
];


function renderCalendar() {
    renderCells();
    renderHeader();

    /**-----Header---- */
    function renderHeader() {
        document.getElementById("calendarHeader").innerText =
            months[calendar.month] + " " + +calendar.year;
        document.querySelector(".today-text").innerHTML =
            weekdays[new Date().getDay()] + " " + calendar.today;
    }

    /**------Calendar body------- */
    function renderCells() {
        let dateCells = document.querySelectorAll("div.date-cell");
        let daysInMonth = 32 - new Date(calendar.year, calendar.month, 32).getDate();
        let firstDayIndex = calendar.date.getDay();
        let lastDayIndex = new Date(calendar.date.getFullYear(), calendar.date.getMonth() + 1, 0).getDay();
        let previousLastDay = new Date(calendar.date.getFullYear(), calendar.date.getMonth(), 0).getDate();

        console.log(calendar);
        console.log(lastDayIndex);
        console.log(previousLastDay);
        console.log(firstDayIndex);
        console.log(daysInMonth);

        /** Clears each cell of data*/
        for (let cell of dateCells) {
            cell.innerHTML = "";
            cell.classList.remove("other-month");
            cell.classList.remove("today");
        }

        /** Fill cells with correct date number and adds color to todays date*/
        const weekday = calendar.date.getDay();
        let i = weekday;
        if (i > 0) {
            for (let i = weekday; i < daysInMonth + weekday && i > 0; i++) {
                dateCells[i - 1].innerHTML = i - weekday + 1;
                // console.log(daysInMonth);
            }
        } else {
            /** When first day of month is a sunday */
            for (j = 1; j < daysInMonth + weekday; j++) {
                for (let i = 6; i < daysInMonth + 6 && i >= 0; i++) {
                    dateCells[i].innerHTML = j++;
                }
            }
        }

        for (let i = 1; i <= daysInMonth; i++) {
            let todaysDate = new Date();
            if (
                dateCells[i].innerHTML == calendar.today &&
                calendar.month == todaysDate.getMonth() &&
                calendar.year == todaysDate.getFullYear()
            ) {
                dateCells[i].classList.add("today");
            }
        }

        /** renders visible last days of previous month */
        for (firstDayIndex -= 2; firstDayIndex >= 0; firstDayIndex--) {
            dateCells[firstDayIndex].innerHTML = previousLastDay;
            previousLastDay--;
            dateCells[firstDayIndex].classList.add("other-month");
        }
    }
}