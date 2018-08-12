import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Paper, TextField, Button } from '@material-ui/core';
import {auth} from '../../utils';
import './Auth.css';

class Auth extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  authenticate = action =>  () => {
    const {username, password} = this.state;
    // console.log('sending', {username, password});
    const setMessage = message => {
      if (this._isMounted) {
        this.setState({message});
      }
      if (action === 'login' && message === 'Success') {
        this.props.history.push('/');
      }
    }
    auth[action]({username, password}).then(
      () => setMessage('Success'),
      (error) => setMessage(error.message)
    );
  }

  login = this.authenticate('login');

  register = this.authenticate('register');


  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderForm() {
    return (
      <form noValidate autoComplete="off">
        <div className="Auth-message">
          {this.state.message}
        </div>
        <TextField
          className="Auth-field"
          label="Email"
          margin="normal"
          value={this.state.username}
          onChange={this.handleChange('username')} />
        <TextField
          className="Auth-field"
          label="Password"
          type="password"
          margin="normal"
          value={this.state.password}
          onChange={this.handleChange('password')} />

        <div className="Auth-actions">
          <Button onClick={this.login} variant="contained" color="primary" className="Auth-action">
            Login
          </Button>
          <Button onClick={this.register} variant="contained" color="secondary" className="Auth-action">
            Register
          </Button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className="Auth">
        <header>
          <img src='/logo.png' className="Auth-logo" alt="logo" />
        </header>
        <Paper className="Auth-Paper">
          {this.renderForm()}
        </Paper>
      </div>
    );
  }
};


export default withRouter(Auth);


