import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Page from '../shell/Page';
import Match from '../Match/Match';

// <Tabs labels={['Matches', 'Standings', 'Top Scorers']}>

// {
//   "id": 36,
//   "name": "English Premier League",
//   "country_id": 1,
//   "type": 1,
//   "seasons": []
// },

// const competitionTypes = {'1': 'League', '2': 'Cup'};

class CompetitionDetails extends Component {
  render() {
    const {location} = this.props;
    const url = location.pathname + '/fixtures';
    const noToolbars = {top: false, bottom: false};

    return (
      <Page
        url={url}
        component={Match}
        list={true}
        toolbars={noToolbars}
        dataMap={data => data.fixtures} />
    );
  }
};


export default withRouter(CompetitionDetails);


