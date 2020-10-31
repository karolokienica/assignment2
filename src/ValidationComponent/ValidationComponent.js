import React from 'react';

const validationcomponent = (props) => {
  let validationText = '';
if(props.text.length > 5){
  validationText = 'Text is long enough';
}else{
  validationText = 'Text is too short';
}
return(
  <p>{validationText}</p>
)
}

export default validationcomponent;