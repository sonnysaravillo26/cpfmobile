import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function NricForm(props) {
  console.log("NricForm", props);

  


  return (
    <div className="wrapper animate__animated animate__bounceInRight">
      <Form.Group className="form-padding">
        <Form.Label>
          <h6>Enter Your NRIC/FIN</h6>
        </Form.Label>
        <Form.Control
          className="form-control form-control-lg center"
          type="text"
          placeholder="e.g S1234567A"
          maxLength="9"
        />
      
      
      
      </Form.Group>
      

      <br/>
      <div>
        <Button
          className="btn-cstm"
          variant="success"
          size="lg"
          onClick={props.handleShowMobileConfirm}
        >
          Next    
          <FontAwesomeIcon icon={faAngleRight} className="btnIconR" color="white" />
        </Button>
      </div>
    </div>
  );
}

export default NricForm;
