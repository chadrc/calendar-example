import React from 'react';

import { storiesOf } from '@storybook/react';
import Main from "../components/Main";
import Calendar from '../components/Calendar';

storiesOf('Main', module)
    .add('Basic', () => (
        <Main />
    ));

storiesOf('Calendar', module)
    .add('Basic', () => (
        <Calendar/>
    ));
