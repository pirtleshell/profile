
import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, onIncClick, onDecClick }) => {
  return (
    <div>
      <p><strong>{ count }</strong></p>
      <button onClick={onIncClick}>+</button>
      <button onClick={onDecClick}>-</button>
    </div>
  )
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onIncClick: PropTypes.func.isRequired,
  onDecClick: PropTypes.func.isRequired,
};

export default Counter
