import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Table extends Component {
  static defaultProps = {
    emptyCellValue: ''
  };

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        id: PropTypes.string
      })
    ).isRequired,
    emptyCellValue: PropTypes.string.isRequired
  };

  state = {
    sortColumn: this.props.columns[0].id,
    sortDirection: this.props.columns[0].id
  };

  onSortColumn(sortColumn, sortDirection) {
    console.log('Sort', sortColumn, sortDirection);
    this.setState(() => ({ sortColumn, sortDirection }));
  }

  render() {
    const columnIds = this.props.columns.map(column => column.id);
    const header = (
      <React.Fragment>
        {this.props.columns.map(column => (
          <div
            key={ column.id }
            className={ styles.cell }
            role="button"
            onClick={ () => this.onSortColumn(column.id) }
          >
            {column.label}
          </div>
        ))}
      </React.Fragment>
    );

    const cells = (
      <React.Fragment>
        {this.props.data.map(row => columnIds.map((columnId, index) => (
          <div key={ `${columnId}-${index}` } className={ styles.cell }>
            {row[columnId] || this.props.emptyCellValue}
          </div>
        )))}
      </React.Fragment>
    );

    return (
      <div
        className={ styles.container }
        style={ { gridTemplateColumns: this.props.columns.map(() => 'auto').join(' ') } }
      >
        {header}
        {cells}
      </div>
    );
  }
}

export default Table;
