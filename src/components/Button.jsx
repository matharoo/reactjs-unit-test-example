import React from 'react';

function Button(props) {
  return (
    <button className="btn-test" onClick={props.toggle} >{props.label}</button>
  );
}

export default Button;