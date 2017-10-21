import React from 'react';

const Today = new Date();

const MonthNames = [
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

const ShortMonthNames = [
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

function genMonth(year, month) {
    let daysInMonth = [];
    let firstOfMonth = new Date(year, month, 1);
    daysInMonth.push(firstOfMonth);
    let nextDay = firstOfMonth;
    while (true) {
        nextDay = new Date(year, month, nextDay.getDate() + 1);
        if (nextDay.getMonth() !== month) {
            break;
        }
        daysInMonth.push(nextDay);
    }
    return daysInMonth;
}

function genYear(year) {
    let monthsInYear = [];
    for (let i=0; i<12; i++) {
        monthsInYear.push(genMonth(year, i));
    }
    return monthsInYear;
}

function genWeekForDay(year, month, day) {
    let theDay = new Date(year, month, day);
    let days = [];
    let startOfWeek = theDay.getDate() - theDay.getDay();
    for (let i=0; i<7; i++) {
        days.push(new Date(year, month, startOfWeek + i));
    }
    return days;
}

function genWeeksForMonth(year, month) {
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

class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentYear: Today.getFullYear(),
            currentMonth: Today.getMonth()
        };
    }

    previousMonth() {
        if (this.state.currentMonth > 0) {
            this.setState({
                currentMonth: this.state.currentMonth - 1
            })
        } else {
            this.setState({
                currentMonth: 11,
                currentYear: this.state.currentYear - 1
            })
        }
    }

    nextMonth() {
        if (this.state.currentMonth < 11) {
            this.setState({
                currentMonth: this.state.currentMonth + 1
            })
        } else {
            this.setState({
                currentMonth: 0,
                currentYear: this.state.currentYear + 1
            })
        }
    }

    previousYear() {
        this.setState({
            currentYear: this.state.currentYear - 1
        })
    }

    nextYear() {
        this.setState({
            currentYear: this.state.currentYear + 1
        })
    }

    render() {
        let currentMonth = new Date(this.state.currentYear, this.state.currentMonth);
        let weeks = genWeeksForMonth(this.state.currentYear, this.state.currentMonth);
        return (
            <section>
                <h3>
                    <button type="button" onClick={() => this.previousYear()}>&lt;</button>
                    {currentMonth.getFullYear()}
                    <button type="button" onClick={() => this.nextYear()}>&gt;</button>
                </h3>
                <h4>
                    <button type="button" onClick={() => this.previousMonth()}>&lt;</button>
                    {MonthNames[currentMonth.getMonth()]}
                    <button type="button" onClick={() => this.nextMonth()}>&gt;</button>
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                    {weeks.map((item, index) => {
                        return (
                            <tr key={index}>
                                {item.map((item) => {
                                    return (
                                        <td key={item.toDateString()}>{item.getDate()}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default CalendarComponent;