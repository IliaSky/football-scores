import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List, CircularProgress } from '@material-ui/core';
import { footballAPI } from 'utils';
import TopToolbar from './TopToolbar';
import BottomToolbar from './BottomToolbar';

class Page extends Component {
  constructor() {
    super();
    this.state = {data: {}, loading: true};
  }

  componentDidMount() {
    this._isMounted = true;
    this._component = withRouter(this.props.component);

    if (this.props.url) {
      footballAPI(this.props.url).then(data => {
        if (this._isMounted) {
          this.setState({data, loading: false});
        }
      }).catch(error => {
        if (this._isMounted) {
          this.setState({error, loading: false});
        }
      });
    } else {
      this.setState({loading: false});
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderContent() {
    const {data, loading, error} = this.state;

    if (loading) {
      return <CircularProgress style={{margin: '50px auto', display: 'block'}}/>;
    }
    if (error) {
      return <div className="error">{error.message}</div>;
    }
    const Item = this._component;

    if (this.props.list) {
      console.log(this.state.data);
      const items = this.state.data.map(item =>
        <Item data={item} key={item.id}/>
      );
      return <List component="nav">{items}</List>;
    }

    return <Item data={data} />;
  }

  render() {
    const title = this.state.data.name || this.props.title || '';

    return (
      <div className="Page">
        <TopToolbar title={title}/>

        <div className="Page-content">
          {this.renderContent()}
        </div>

        <BottomToolbar />
      </div>
    );
  }
}

Page.propTypes = {
  component: PropTypes.func.isRequired
};

export default Page;
