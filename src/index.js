import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.scss';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

ReactDOM.render(<App />, document.getElementById('root'));
