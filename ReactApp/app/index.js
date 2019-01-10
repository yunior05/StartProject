import React from 'react';
import { render } from 'react-dom';
import './styles.css'

import Home from './Components/Home';

class App extends React.Component {
  render() {
    return(
      <div className="main">
        <Home />
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)