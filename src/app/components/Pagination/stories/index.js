import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Pagination from '..';

const propTypes = {
  page: PropTypes.number.isRequired
};

const MyPage = ({ page }) => (
  <div style={ { border: '1px grey dashed', width: 200 } }>
    <h3>Page {page}</h3>
    <p>Content example - {page}</p>
  </div>
);

MyPage.propTypes = propTypes;

storiesOf('Pagination', module)
  .addDecorator(story => (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'column',
        alignItems: 'center'
      } }
    >
      <h1>Pagination</h1>
      <div style={ { textAlign: 'center' } }>{story()}</div>
    </div>
  ))

  .add('no props', () => <Pagination />)

  .add('with infinite pages', () => {
    const range = number('Page range', 5);
    return <Pagination range={ range }>{page => <MyPage page={ page } />}</Pagination>;
  })

  .add('with finites pages', () => {
    const range = number('Page range', 5);
    const totalPages = number('Total pages', 10);
    return (
      <Pagination
        range={ range }
        size={ totalPages }
        onSelect={ page => console.log('Current page:', page) }
      >
        {page => <MyPage page={ page } />}
      </Pagination>
    );
  })

  .add('starting from page 5', () => {
    const range = number('Page range', 5);
    const totalPages = number('Total pages', 10);
    return (
      <Pagination
        firstPage={ 5 }
        range={ range }
        size={ totalPages }
        onSelect={ page => console.log('Current page:', page) }
      >
        {page => <MyPage page={ page } />}
      </Pagination>
    );
  });
