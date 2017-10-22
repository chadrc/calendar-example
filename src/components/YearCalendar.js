import React from 'react';
import PropTypes from 'prop-types'

import {Today, genWeeksForMonth, MonthNames} from "../utils";

class YearCalendar extends React.Component {
    static propTypes = {
        onDaySelected: PropTypes.func
    };

    constructor(props) {
        super(props);
        let currentYear = Today.getFullYear();
        let months = [];
        for (let i=0; i<12; i++) {
            months.push(genWeeksForMonth(currentYear, i));
        }
        this.state = {
            currentYear: currentYear,
            months: months
        }
    }

    daySelected(day) {
        if (this.props.onDaySelected) {
            this.props.onDaySelected(day);
        }
    }

    render() {
        return (
            <section className="year-calendar">
                <h2>{this.state.currentYear}</h2>
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