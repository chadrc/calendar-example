import React from 'react';
import PropTypes from 'prop-types'

import {Today, genWeeksForYear, MonthNames} from "../utils";

class YearCalendar extends React.Component {
    static propTypes = {
        onDaySelected: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            currentYear: Today.getFullYear(),
            months: genWeeksForYear(Today.getFullYear())
        }
    }

    daySelected(day) {
        if (this.props.onDaySelected) {
            this.props.onDaySelected(day);
        }
    }

    previousYear() {
        this.setWeeks(this.state.currentYear - 1);
    }

    nextYear() {
        this.setWeeks(this.state.currentYear + 1);
    }

    setWeeks(year) {
        this.setState({
            currentYear: year,
            months: genWeeksForYear(year)
        });
    }

    render() {
        return (
            <section className="year-calendar">
                <h2>
                    <button type="button" onClick={() => this.previousYear()}>&lt;</button>
                    {this.state.currentYear}
                    <button type="button" onClick={() => this.nextYear()}>&gt;</button>
                </h2>
                {this.state.months.map((month, index) => {
                    return (
                        <div className="month" key={MonthNames[index]}>
                            <h4>{MonthNames[index]}</h4>
                            <table>
                                <thead>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>R</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                </thead>
                                <tbody>
                                {month.map((week, index) => {
                                    return (
                                        <tr key={index}>
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
                        </div>
                    )
                })}
            </section>
        );
    }
}

export default YearCalendar;