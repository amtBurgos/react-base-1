import React from 'react';
import { Link } from 'react-router-dom';
import { txt } from 'base/i18n';
import { ROUTES } from 'base/routes';

import './styles';

const options = ['USER', 'ROLE', 'PERMISSION', 'MENU_OPTIONS'];

const Dashboard = () => {
  const renderOptions = options.map(option => (
    <li key={ option }>
      <Link to={ ROUTES.PRIVATE.USERS.ROOT }>{txt(option)}</Link>
    </li>
  ));

  return <ul>{renderOptions}</ul>;
};

export default Dashboard;
