import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class AccordionSection extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    openIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    closeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  };

  static defaultProps = {
    openIcon: '-',
    closeIcon: '+'
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { isOpen, openIcon, closeIcon } = this.props;

    const arrowIcon = isOpen ? openIcon : closeIcon;

    return (
      <div className={ styles.accordion }>
        <div className={ styles.header } onClick={ this.onClick }>
          {this.props.label}
          <div className={ styles.icon }>{arrowIcon}</div>
        </div>
        {isOpen && <div className={ styles.body }>{this.props.children}</div>}
      </div>
    );
  }
}

export default AccordionSection;
