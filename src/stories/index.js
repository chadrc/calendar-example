import React from 'react';

import { storiesOf } from '@storybook/react';
import Main from "../components/Main";

storiesOf('Main', module)
    .add('Basic', () => (
        <Main />
    ));
