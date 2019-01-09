import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '..';

const content = (
  <>
    <h3>Content example</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </>
);

storiesOf('Table', module)
  .addDecorator(story => (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center'
      } }
    >
      <h1>Table</h1>
      <div style={ { width: 500 } }>{story()}</div>
    </div>
  ))

  .add('with an open start', () => (
    <Table>
      <div label="Alligator Mississippiensis" isOpen={ true }>
        {content}
      </div>
      <div label="Alligator Sinensis">{content}</div>
    </Table>
  ));
