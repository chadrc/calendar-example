import { configure } from '@storybook/react';

import "../src/index.css";

function loadStories() {
  require('../src');
}

configure(loadStories, module);
