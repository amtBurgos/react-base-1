import React, { Component } from 'react';
import { translate } from 'base/i18n';
import Dummy from 'components/Dummy';
import styles from './styles';

class Main extends Component {
  render() {
    console.log('Main render');
    return (
      <div className={ styles.Main }>
        <div>
          <div>
            <div className={ styles.txt }>{translate('EXAMPLES')}</div>

            <div className={ styles.txt }>{translate('CONTENT')}</div>
            <Dummy />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
