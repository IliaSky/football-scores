import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './utils.js';
import TopToolbar from './components/TopToolbar/TopToolbar';
import BottomToolbar from './components/BottomToolbar/BottomToolbar';
import CountryList from './components/CountryList/CountryList';
import MatchList from './components/MatchList/MatchList';
import MatchDetails from './components/MatchDetails/MatchDetails';
import CompetitionList from './components/CompetitionList/CompetitionList';

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
      <Router>
        <div className="App">
          <MuiThemeProvider theme={theme}>
            <TopToolbar />

            <Switch>
              <Route exact path='/' render={() =>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to Football Scores</h1>
                </header>
              }/>

              <Route path='/countries' component={CountryList} />
              <Route path='/matches/:id' component={MatchDetails} />
              <Route path='/matches' component={MatchList} />
              <Route path='/competitions' component={CompetitionList} />
              {
              // <Route path='/favorites' component={FavoriteList}/>
              }
            </Switch>

            <BottomToolbar />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
