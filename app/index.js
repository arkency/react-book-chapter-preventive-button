import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PreventiveButton from './components/PreventiveButton';

const APP_ROOT = document.createElement('div');
document.body.appendChild(APP_ROOT);

React.render(<PreventiveButton/>, APP_ROOT);
