import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from '../AccordionSection';
import styles from './styles';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  createSections = children => children.reduce((acc, curr) => {
    acc[curr.props.label] = curr.props.isOpen;
    return acc;
  }, {});

  state = {
    openSections: this.createSections(this.props.children)
  };

  onClick = label => {
    const { openSections } = this.state;

    const isOpen = !!openSections[label];

    if (this.props.allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    return (
      <div className={ styles.container }>
        {this.props.children.map((child, i) => (
          <AccordionSection
            key={ i }
            isOpen={ !!this.state.openSections[child.props.label] }
            label={ child.props.label }
            onClick={ this.onClick }
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
