import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TopToolbar from './components/TopToolbar/TopToolbar';
import CountryList from './components/CountryList/CountryList';
import logo from './logo.svg';
import './App.css';
import './utils.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50'
    },
    secondary: {
      main: '#00b0ff'
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <TopToolbar />

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Football Scores</h1>
          </header>

          <CountryList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
