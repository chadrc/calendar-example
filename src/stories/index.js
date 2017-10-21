import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MonthCalendar from '../components/MonthCalendar';

storiesOf('Calendar', module)
    .add('Month', () => (
        <MonthCalendar onDaySelected={action('day selected')} />
    ));
