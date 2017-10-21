import React from 'react';
import PropTypes from 'prop-types'

import {Today, genWeeksForMonth, MonthNames} from "../utils/index";

class MonthCalendar extends React.Component {
    static propTypes = {
        onDaySelected: PropTypes.func
    };

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

    daySelected(day) {
        console.log('day selected', day);
        if (this.props.onDaySelected) {
            this.props.onDaySelected(day);
        }
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
                    {weeks.map((week, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {week.map((day) => {
                                    return (
                                        <td className="day"
                                            onClick={() => this.daySelected(day)}
                                            key={day.toDateString()}>
                                            {day.getDate()}
                                        </td>
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

export default MonthCalendar;