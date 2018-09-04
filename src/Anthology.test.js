import React from 'react';
import ReactDOM from 'react-dom';
import Anthology from './Anthology';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Anthology />, div);
  ReactDOM.unmountComponentAtNode(div);
});
