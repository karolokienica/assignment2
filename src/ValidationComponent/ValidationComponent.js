import React from 'react';

const validationcomponent = (props) => {
  let validationMessage = (<p>Text is long enough</p>);
if(/*props.text.length*/props.inputLength <= 5){
  validationMessage = (<p>Text is too short</p>);
}
return(
  validationMessage
)
}

export default validationcomponent;