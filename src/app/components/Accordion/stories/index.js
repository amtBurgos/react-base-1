import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from '..';

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

storiesOf('Accordion', module)
  .addDecorator(story => (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center'
      } }
    >
      <h1>Accordion</h1>
      <div style={ { width: 500 } }>{story()}</div>
    </div>
  ))

  .add('allows one open', () => (
    <Accordion>
      <div label="Alligator Mississippiensis">{content}</div>
      <div label="Alligator Sinensis">{content}</div>
    </Accordion>
  ))

  .add('allows multiple opens', () => (
    <Accordion allowMultipleOpen={ true }>
      <div label="Alligator Mississippiensis">{content}</div>
      <div label="Alligator Sinensis">{content}</div>
    </Accordion>
  ))

  .add('with an open start', () => (
    <Accordion>
      <div label="Alligator Mississippiensis" isOpen={ true }>
        {content}
      </div>
      <div label="Alligator Sinensis">{content}</div>
    </Accordion>
  ));
