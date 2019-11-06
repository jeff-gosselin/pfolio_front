import React from 'react';
import '../css/client_css/Paragraph.scss';

const Paragraph = props => {
  return (
    <div id='summary'>
      <h2>Let me introduce myself...</h2>
      <p>"{props.summary}"</p>
    </div>
  );
};

export default Paragraph;
