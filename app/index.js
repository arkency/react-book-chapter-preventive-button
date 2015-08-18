import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PreventiveButton from './components/PreventiveButton';

const APP_ROOT = document.createElement('div');
document.body.appendChild(APP_ROOT);

function action(component) {
  console.log("Done");
}

React.render(<PreventiveButton label="Submit" action={action} />, APP_ROOT);
