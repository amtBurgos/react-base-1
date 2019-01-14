import React from 'react';
import PropTypes from 'prop-types';
import './styles';

const propTypes = {
  user: PropTypes.string
};

const DetailedUser = ({ user }) => <div>Details of {user} in a fancy form</div>;

DetailedUser.propTypes = propTypes;

export default DetailedUser;
