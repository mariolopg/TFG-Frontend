import React from 'react';
import './customInputs.css'

interface InputErrorMsgProps {
  errors: []
}

const InputErrorMsg = (props: InputErrorMsgProps) => {
  return (
    <div className="message-error">
      {props.errors
        ? props.errors.map((error) => {
          return <p>{error}</p>;
        })
        : ""}
    </div>
  );
};

export default React.memo(InputErrorMsg);
