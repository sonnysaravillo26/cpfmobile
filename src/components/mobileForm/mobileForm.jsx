import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterMobileForm from "../common/footerMobileForm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


const Heading = React.lazy(() => import("./../common/heading"));

function MobileForm() {
  const [$showInputMobileForm, setShowInputMobileForm] = useState(true);
  // const [$showOtpForm, setShowOtpForm] = useState(false);
  const [$mobilenum, setMobilenum] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    setShowInputMobileForm(true);
    // setShowOtpForm(false);
  }, []);

  const handleNext = () => {
    console.log("handle Next to verify");
    // setShowInputMobileForm(false);
    // setShowOtpForm(true);
  };

  const handleBack = () => {
    console.log("handle Back");
    navigate("/");
  };

  const handleVerify = () => {
    console.log("handle Verify");
  };

  const handleChangeInput = (event) => {
    const { value, maxLength } = event.target;
    const mobilenum = value.slice(0, maxLength);

    //set limit
    setMobilenum(mobilenum);
  }

  return (
    <React.Fragment>
      <Container fluid className="body_content">
        <Row>
          <Col>
            <Suspense fallback={<div>Loading...</div>}>
              <Heading />
            </Suspense>

            {$showInputMobileForm && (
              <Suspense fallback={<div>Loading...</div>}>

                <div className="wrapper animate__animated animate__bounceInRight">
                  <div className="bg-wrapper">
                    <Form.Group className="form-padding">
                      <Form.Label>
                        <h6>Enter your mobile number</h6>
                        <p>We will send you a one-time password (OTP) to verify</p>
                      </Form.Label>
                      <Form.Control
                        className="form-control form-control-lg center"
                        placeholder="e.g 98473985"
                        type="number"
                        maxLength="8"
                        onChange={handleChangeInput}
                        value={$mobilenum}
                      />
                    </Form.Group>
                  </div>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-cstm"
                      variant="success"
                      size="lg"
                      onClick={handleBack}
                    >
                      <FontAwesomeIcon icon={faAngleLeft} className="btnIconL" color="white" />

                      Back
                    </Button>
                    <Button
                      className="btn-cstm"
                      variant="success"
                      size="lg"
                      onClick={handleNext}
                    >
                      Next
                      <FontAwesomeIcon icon={faAngleRight} className="btnIconR" color="white" />
                    </Button>
                  </div>
                </div>


              </Suspense>
            )}

          </Col>
        </Row>
      </Container>
      <FooterMobileForm />
    </React.Fragment>
  );
}

export default MobileForm;
