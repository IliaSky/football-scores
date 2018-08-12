import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Navigator from './shell/Navigator';
import Country from './Country/Country';
import Match from './Match/Match';
import MatchDetails from './MatchDetails/MatchDetails';
import Competition from './Competition/Competition';
import CompetitionDetails from './CompetitionDetails/CompetitionDetails';
import Auth from './Auth/Auth';
import Home from './Home/Home';

const routes = [
  { path: '/countries', component: Country, list: true, title: 'Countries' },
  { path: '/matches/:id', component: MatchDetails, title: 'Match Details' },
  { path: '/matches', component: Match, list: true, title: 'Matches' },
  { path: '/competitions/:id', component: CompetitionDetails },
  { path: '/competitions', component: Competition, list: true, title: 'Competitions' },
  { path: '/auth', component: Auth, title: 'Login / Register', offline: true },
  { path: '/', component: Home, title: 'Football Scores', offline: true },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4CAF50'
    },
    secondary: {
      main: '#f50057' //00b0ff
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Navigator routes={routes} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
