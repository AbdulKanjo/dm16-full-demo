import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import routes from './routes';
import store from './store';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
