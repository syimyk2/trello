import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color, className }) => (
  <div style={{
    margin: '0 auto',
    position: 'relative',
    top: '10px',
    left: '3px'

  }}>
     <ReactLoading type={type} color={color} height={900} width={365} />
  </div>

);

export default Loading;
