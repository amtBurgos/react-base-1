import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { txt } from 'base/i18n';
import { ROUTES } from 'base/routes';

import DetailedUser from './components/DetailedUser';
import './styles';

const users = ['Fernando', 'Josh', 'Pablo'];

class User extends Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object
  };

  detailedUserURL = user => ROUTES.PRIVATE.USERS.DETAILS.replace(/:(id)/, user);

  render() {
    const { match, location } = this.props;

    console.log('location', location, match);

    const renderUsers = users.map(user => (
      <li key={ user }>
        <Link to={ this.detailedUserURL(user) }>{user}</Link>
        <Link to={ this.detailedUserURL(user) }>
          <button>{txt('EDIT')}</button>
        </Link>
        <button>{txt('REMOVE')}</button>
      </li>
    ));

    const hasDetails = location.pathname.includes('details');

    const renderDetails = hasDetails && <DetailedUser user={ location.pathname.split('/').pop() } />;

    return (
      <div>
        <Link to={ ROUTES.PRIVATE.USERS.CREATE }>{txt('CREATE_USER')}</Link>
        <ul>{renderUsers}</ul>
        {renderDetails}
      </div>
    );
  }
}

export default User;
