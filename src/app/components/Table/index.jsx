import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Table extends Component {
  static propTypes = {
    // data: PropTypes.array.isRequired
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
      })
    ).isRequired
  };

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.cell }>1</div>
      </div>
    );
  }
}

export default Table;
