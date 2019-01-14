import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Table from '..';

const columns = [
  { label: 'column1', id: 'c1' },
  { label: 'column2', id: 'c2' },
  { label: 'column3', id: 'c3' }
];

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
      <div style={ { display: 'flex', justifyContent: 'center' } }>{story()}</div>
    </div>
  ))

  .add('Rows with simple strings', () => {
    const data = [
      { c1: 'value1', c2: 'value2', c3: 'value3' },
      { c1: 'value4', c2: 'value5', c3: 'value6' }
    ];
    return <Table columns={ columns } data={ data } />;
  })
  .add('Rows with cells without value', () => {
    const data = [{ c1: 'value1', c3: 'value3' }, { c1: 'value4', c2: 'value5', c3: 'value6' }];
    return <Table columns={ columns } data={ data } />;
  })
  .add('Rows with custom empty cell value', () => {
    const data = [{ c1: 'value1', c3: 'value3' }, { c1: 'value4', c2: 'value5', c3: 'value6' }];
    return <Table columns={ columns } data={ data } emptyCellValue={ '-' } />;
  })
  .add('Rows with more data per row than needed', () => {
    const data = [
      {
        c1: 'value1', c2: 'value2', c3: 'value3', extraData1: 'extra data' 
      },
      {
        c1: 'value4', c2: 'value5', c3: 'value6', extraData2: 'extra data' 
      }
    ];
    return <Table columns={ columns } data={ data } />;
  })
  .add('Rows with custom html component', () => {
    const customHeader = [
      { label: <strong>column1</strong>, id: 'c1' },
      { label: <strong>column2</strong>, id: 'c2' },
      { label: <strong>column3</strong>, id: 'c3' }
    ];
    const data = [
      {
        c1: <span style={ { color: 'blue' } }>value1</span>,
        c2: <span style={ { color: 'red' } }>value2</span>,
        c3: <span style={ { color: 'green' } }>value3</span>
      },
      {
        c1: <span style={ { color: 'green' } }>value4</span>,
        c2: <span style={ { color: 'blue' } }>value5</span>,
        c3: <span style={ { color: 'red' } }>value6</span>
      }
    ];
    return <Table columns={ customHeader } data={ data } />;
  })
  .add('Rows with custom React component', () => {
    const ReactComponent = ({ label, color }) => <span style={ { color } }>{label}</span>;
    ReactComponent.propTypes = {
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    };

    const data = [
      {
        c1: <ReactComponent label={ 'ReactComponent1' } color={ 'red' } />,
        c2: <ReactComponent label={ 'ReactComponent2' } color={ 'red' } />,
        c3: <ReactComponent label={ 'ReactComponent3' } color={ 'red' } />
      },
      {
        c1: <ReactComponent label={ 'ReactComponent4' } color={ 'red' } />,
        c2: <ReactComponent label={ 'ReactComponent5' } color={ 'red' } />,
        c3: <ReactComponent label={ 'ReactComponent6' } color={ 'red' } />
      }
    ];
    return <Table columns={ columns } data={ data } />;
  });
