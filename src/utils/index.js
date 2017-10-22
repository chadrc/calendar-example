export const Today = new Date();

export const MonthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const ShortMonthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

export function genWeekForDay(year, month, day) {
    let theDay = new Date(year, month, day);
    let days = [];
    let startOfWeek = theDay.getDate() - theDay.getDay();
    for (let i=0; i<7; i++) {
        days.push(new Date(year, month, startOfWeek + i));
    }
    return days;
}

export function genWeekForToday() {
    return genWeekForDay(Today.getFullYear(), Today.getMonth(), Today.getDate());
}

export function genWeeksForMonth(year, month) {
    let firstOfMonth = new Date(year, month, 1);
    let weeks = [];
    let firstOfWeek =  new Date(year, month, firstOfMonth.getDate() - firstOfMonth.getDay());
    weeks.push(genWeekForDay(firstOfWeek.getFullYear(), firstOfWeek.getMonth(), firstOfWeek.getDate()));
    while (true) {
        firstOfWeek = new Date(firstOfWeek.getFullYear(), firstOfWeek.getMonth(), firstOfWeek.getDate() + 7);
        if (firstOfWeek.getMonth() !== month) {
            break;
        }
        weeks.push(genWeekForDay(year, month, firstOfWeek.getDate()));
    }
    return weeks;
}

export function genWeeksForYear(year) {
    let months = [];
    for (let i=0; i<12; i++) {
        months.push(genWeeksForMonth(year, i));
    }
    return months;
}