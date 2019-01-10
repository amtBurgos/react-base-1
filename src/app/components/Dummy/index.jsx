import React from 'react';
import Presentational from 'components/Presentational';

const Dummy = () => {
  console.log('Dummy render');
  return (
    <div>
      Dummy + <Presentational />
    </div>
  );
};

export default Dummy;
