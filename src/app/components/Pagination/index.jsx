import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Pagination extends Component {
  static propTypes = {
    children: PropTypes.func,
    firstPage: PropTypes.number,
    onSelect: PropTypes.func,
    range: PropTypes.number,
    size: PropTypes.number
  };

  static defaultProps = {
    onSelect: () => {},
    range: 1,
    size: Infinity
  };

  state = {
    currentPage: this.props.firstPage || 1
  };

  goToPage = event => {
    const page = Number(event.target.dataset.page);
    const { size } = this.props;
    let validPage = page;
    if (page < 1) {
      validPage = 1;
    } else if (page > size) {
      validPage = size;
    }
    this.setState(
      {
        currentPage: validPage
      },
      () => this.props.onSelect(validPage)
    );
  };

  createRange = (start, end) => {
    const last = end <= this.props.size ? end : this.props.size;
    return Array.from({ length: 1 + last - start }, (_, i) => start + i);
  };

  createPageRange = () => {
    const { currentPage } = this.state;
    const { size } = this.props;

    const range = Math.ceil(this.props.range / 2);
    const offset = this.props.range % 2;

    let pageRange;
    if (currentPage <= range) {
      pageRange = this.createRange(1, this.props.range);
    } else if (currentPage >= range && currentPage <= size - range) {
      pageRange = this.createRange(currentPage - range + offset, currentPage + range - 1);
    } else {
      pageRange = this.createRange(size - this.props.range + 1, size);
    }

    return pageRange;
  };

  render() {
    const { currentPage } = this.state;

    const pageRange = this.createPageRange();

    const selectablePages = pageRange.map(page => (
      <button
        key={ page }
        className={ page === currentPage ? styles.selectedPage : '' }
        data-page={ page }
        onClick={ this.goToPage }
      >
        {page}
      </button>
    ));
    return (
      <div>
        {this.props.children && this.props.children(currentPage)}
        <button data-page={ currentPage - 1 } onClick={ this.goToPage }>
          {'<'}
        </button>
        {selectablePages}
        <button data-page={ currentPage + 1 } onClick={ this.goToPage }>
          {'>'}
        </button>
      </div>
    );
  }
}
