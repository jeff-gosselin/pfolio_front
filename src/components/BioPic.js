import React from 'react';
import portrait from '../img/portrait.jpg';
import '../css/client_css/BioPic.scss';

const BioPic = () => {
  return (
    <div>
      <div className='bio-pic'>
        <img alt='' src={portrait} />
      </div>
      <div className='bio-pic-solids'>
        <div className='bio-pic-solid1'>
          <div className='green'></div>
        </div>
        <div className='bio-pic-solid2'>
          <div className='blue'></div>
        </div>
      </div>
    </div>
  );
};

export default BioPic;
