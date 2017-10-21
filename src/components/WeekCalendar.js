import React from 'react';
import PropTypes from 'prop-types'

import {Today, genWeeksForMonth, MonthNames} from "../utils";

class WeekCalendar extends React.Component {
    static propTypes = {
        onDaySelected: PropTypes.func
    };

    render() {
        return (
            <section>

            </section>
        );
    }
}

export default WeekCalendar;