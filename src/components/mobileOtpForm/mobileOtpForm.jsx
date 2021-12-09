import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterMobileOtpForm from "../common/footerMobileOtpForm";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Heading = React.lazy(() => import("./../common/heading"));

function MobileOtpForm() {
  const [$showInputMobileForm, setShowInputMobileForm] = useState(false);
  const [$showOtpForm, setShowOtpForm] = useState(false);
  const [$otpNum1, setOtpNum1] = useState();
  const [$otpNum2, setOtpNum2] = useState();
  const [$otpNum3, setOtpNum3] = useState();
  const [$otpNum4, setOtpNum4] = useState();
  const [$otpNum5, setOtpNum5] = useState();
  const [$otpNum6, setOtpNum6] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    setShowInputMobileForm(false);
    setShowOtpForm(true);
  }, []);

  const handleNext = () => {
    console.log("handle Next to verify");
    setShowInputMobileForm(false);
    setShowOtpForm(true);
  };

  const handleBack = () => {
    console.log("handle Back");
    navigate("/");
  };

  const handleOtpVerify = () => {
    console.log("handle Verify");

  };


  const handleChangeOtpInput1 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum1(otpnum);
  }

  const handleChangeOtpInput2 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum2(otpnum);
  }

  const handleChangeOtpInput3 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum3(otpnum);
  }

  const handleChangeOtpInput4 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum4(otpnum);
  }
  const handleChangeOtpInput5 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum5(otpnum);
  }

  const handleChangeOtpInput6= (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum6(otpnum);
  } 


  return (
    <React.Fragment>
      <Container fluid className="body_content">
        <Row>
          <Col>
            <Suspense fallback={<div>Loading...</div>}>
              <Heading />
            </Suspense>

            {$showOtpForm && (
              <Suspense fallback={<div>Loading...</div>}>

                <div className="wrapper animate__animated animate__bounceInRight">
                  <Form>
                    <div className="otpContainer">
                      <div className="bg-wrapper">
                        <Form.Group className="form-padding">
                          <Form.Label>
                            <h6>Enter OTP code has been sent to your number</h6>
                          </Form.Label>
                        </Form.Group>
                        <Row>
                          <Form.Group as={Col} xs={2} md={2} controlId="otp1">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp1"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput1}
                              value={$otpNum1}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp2">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp2"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput2}
                              value={$otpNum2}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp3">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp3"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput3}
                              value={$otpNum3}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp4">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp4"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput4}
                              value={$otpNum4}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp5">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp5"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput5}
                              value={$otpNum5}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp6">
                            <Form.Control
                              className="form-control center"
                              type="number"
                              name="otp6"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleChangeOtpInput6}
                              value={$otpNum6}
                            />
                          </Form.Group>
                        </Row>
                      </div>
                      <div className="btn-wrapper">
                        <Button className="btn-cstm" variant="success" size="lg"
                          onClick={handleOtpVerify}>
                          Verify
                          <FontAwesomeIcon icon={faAngleRight} className="btnIconR" color="white" />
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>


              </Suspense>
            )}
          </Col>
        </Row>
      </Container>
      <FooterMobileOtpForm />
    </React.Fragment>
  );
}

export default MobileOtpForm;
