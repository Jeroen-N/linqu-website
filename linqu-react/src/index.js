import React from 'react';
import ReactDOM from 'react-dom';
import Body from './App';
import {Navbar} from './navbar';
import {HeaderButtons} from './header-buttons';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Body />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('myNavbar'));
ReactDOM.render(<HeaderButtons />, document.getElementById('myBanner'));
registerServiceWorker();

