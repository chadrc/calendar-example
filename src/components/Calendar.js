import React from 'react';

import {Today, genWeeksForMonth, MonthNames} from "../utils/index";

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
                            <th>#</th>
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
                                <td>{index + 1}</td>
                                {item.map((item) => {
                                    return (
                                        <td className="day" key={item.toDateString()}>{item.getDate()}</td>
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