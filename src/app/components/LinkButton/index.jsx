import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const propTypes = {
  value: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

const LinkButton = props => (
  <Link className={ styles.LinkButton } to={ props.location }>
    <button>
      { props.value }
    </button>
  </Link>
);

LinkButton.propTypes = propTypes;

export default LinkButton;
