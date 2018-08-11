import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { List, CircularProgress } from '@material-ui/core';
import { footballAPI } from 'utils';


class ItemList extends Component {
  constructor() {
    super();
    this.state = {items: [], loading: true};
  }

  componentDidMount() {
    this._isMounted = true;
    this._item = withRouter(this.props.item);
    footballAPI(this.props.url).then(items => {
      if (this._isMounted) {
        this.setState({items, loading: false});
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.loading) {
      return <CircularProgress style={{marginTop: '30px'}}/>;
    }
    const Item = this._item;
    return (
      <List component="nav">
        {this.state.items.map(item =>
          <Item data={item} key={item.id}/>
        )}
      </List>
    );
  }
}

ItemList.propTypes = {
  url: PropTypes.string.isRequired,
  item: PropTypes.func.isRequired
};

export default ItemList;
