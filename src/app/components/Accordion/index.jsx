import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from '../AccordionSection';
import styles from './styles';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    allowMultipleOpen: false
  };

  createSections = children => children.reduce((acc, curr) => {
    acc[curr.props.label] = curr.props.isOpen;
    return acc;
  }, {});

  state = {
    openSections: this.createSections(this.props.children)
  };

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
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
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <div className={ styles.container }>
        {children.map((child, i) => (
          <AccordionSection
            key={ i }
            isOpen={ !!openSections[child.props.label] }
            label={ child.props.label }
            onClick={ onClick }
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
