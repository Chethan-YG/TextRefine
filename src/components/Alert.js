import React from 'react';

export default function Alert(props) {

    const capitalize = (word) => {
        if (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return '';
      };

    const handleClose = () => {
        props.onClose();
      };
    
  return (
    <div style={{height: '50px', marginTop:'100px' }}>
     { props.alert && 
        (<div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"
        >
          <strong>{capitalize(props.alert.type)} </strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"  onClick={handleClose}></button>
        </div>)} 
    </div>
  );
}


