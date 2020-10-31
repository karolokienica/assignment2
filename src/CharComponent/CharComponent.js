import React from 'react';

const charcomponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  }

return(
  <div style={style}>
    {props.letter}
  </div>
)
}

export default charcomponent;