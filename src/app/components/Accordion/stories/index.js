import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from '..';

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
      <div style={ { width: 300 } }>{story()}</div>
    </div>
  ))

  .add('no props', () => (
    <Accordion>
      <div label="Alligator Mississippiensis">
        <p>
          <strong>Common Name:</strong> American Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Texas to North Carolina, United States
        </p>
        <p>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </p>
      </div>
      <div label="Alligator Sinensis">
        <p>
          <strong>Common Name:</strong> Chinese Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Eastern China
        </p>
        <p>
          <strong>Endangered Status:</strong> Critically Endangered
        </p>
      </div>
    </Accordion>
  ));
