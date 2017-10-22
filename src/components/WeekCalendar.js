import React from 'react';
import PropTypes from 'prop-types'

import {Today, genWeekForToday, genWeeksForMonth, MonthNames} from "../utils";
import {genWeekForDay} from "../utils/index";

class WeekCalendar extends React.Component {
    static propTypes = {
        onDaySelected: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            currentWeek: genWeekForToday()
        }
    }

    previousWeek() {
        let sunday = this.state.currentWeek[0];
        sunday.setDate(sunday.getDate() - 7);
        this.setState({
            currentWeek: genWeekForDay(sunday.getFullYear(), sunday.getMonth(), sunday.getDate())
        });
    }

    nextWeek() {
        let sunday = this.state.currentWeek[0];
        sunday.setDate(sunday.getDate() + 7);
        this.setState({
            currentWeek: genWeekForDay(sunday.getFullYear(), sunday.getMonth(), sunday.getDate())
        });
    }

    render() {
        let currentMonthYears = [];
        for (let day of this.state.currentWeek) {
            if (currentMonthYears.findIndex((item) => item.month === day.getMonth()) <= -1) {
                currentMonthYears.push({
                    month: day.getMonth(),
                    year: day.getFullYear()
                });
            }
        }
        return (
            <section>
                <h2>
                    {currentMonthYears.length === 1 ?
                        `${MonthNames[currentMonthYears[0].month]} ${currentMonthYears[0].year}`
                    :
                        `${MonthNames[currentMonthYears[0].month]} ${currentMonthYears[0].year} - ${MonthNames[currentMonthYears[1].month]} ${currentMonthYears[1].year}`
                    }
                </h2>
                <button type="button" onClick={() => this.previousWeek()}>&lt;</button>
                <button type="button" onClick={() => this.nextWeek()}>&gt;</button>
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
                        <tr>
                            {this.state.currentWeek.map((day) => {
                                return (
                                    <td key={day.toDateString()}>
                                        {day.getDate()}
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default WeekCalendar;