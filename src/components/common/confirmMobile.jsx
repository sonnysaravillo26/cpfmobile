import React from "react";
import { Button } from "react-bootstrap";

function ConfirmMobile(props) {
  console.log("confirmMobile", props);

  return (
    <div className="wrapper animate__animated animate__bounceInRight">
      <div className="bg-wrapper">
        <h6>Is this your mobile number?</h6>
        <div>
          <h4 className="text-cstm bg-orange">{props.mobileNumber}</h4>
        </div>

        <div className="btn-wrapper">
          <Button
            className="btn-cstm"
            variant="success"
            size="lg"
            onClick={props.handleMobileConfirmNo}
          >
            No
          </Button>
          <Button
            className="btn-cstm"
            variant="success"
            size="lg"
            onClick={props.handleMobileConfirmYes}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmMobile;
