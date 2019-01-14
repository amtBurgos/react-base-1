import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import * as api from './api';
import './styles';

class App extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
  };

  state = {
    isReady: false
  };

  componentDidMount() {
    api.getTranslations().then(() => this.setState({ isReady: true }));
  }

  render() {
    const { children } = this.props;
    if (!this.state.isReady) return <div>Loading ...</div>;

    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}

export default App;
