import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import YearCalendar from "./components/YearCalendar";
import MonthCalendar from './components/MonthCalendar';
import WeekCalendar from "./components/WeekCalendar";

storiesOf('Calendar', module)
    .add('Year', () => (
        <YearCalendar onDaySelected={action('day selected')} />
    ))
    .add('Month', () => (
        <MonthCalendar onDaySelected={action('day selected')} />
    ))
    .add("Week", () => (
        <WeekCalendar onDaySelected={action('day selected')} />
    ));
