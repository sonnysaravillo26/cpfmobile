import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterMobileOtpForm from "../common/footerMobileOtpForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Joi from "joi-browser";

const Heading = React.lazy(() => import("./../common/heading"));

function MobileOtpForm() {
  const [$sampleOtp, setSampleOtp] = useState({
    otp1: null,
    otp2: null,
    otp3: null,
    otp4: null,
    otp5: null,
    otp6: null,
  });

  const [$disableBtnVerify, setDisableBtnVerify] = useState(false);
  const [foundError, setFoundError] = useState();
  const [errors, setErrors] = useState({});
  const schema = {
    otp1: Joi.number().required(),
    otp2: Joi.number().required(),
    otp3: Joi.number().required(),
    otp4: Joi.number().required(),
    otp5: Joi.number().required(),
    otp6: Joi.number().required(),
  };

  const validateForm = (event) => {
    event.preventDefault();
    const result = Joi.validate($sampleOtp, schema, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      setDisableBtnVerify(false);
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setDisableBtnVerify(true);
      setFoundError(errors);
      setErrors(errorData);

      return errorData;
    }
  };

  const handleOnChangeOptn = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      setDisableBtnVerify(false);
      setFoundError(null);
      delete errorData[name];
    }
    let sampleData = { ...$sampleOtp };
    sampleData[name] = value;
    setSampleOtp(sampleData);
    setErrors(errorData);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

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

  const handleOtpVerify = (event) => {
    console.log(event);
    console.log("handle Verify");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("You clicked submit.");
  };

  const handleChangeOtpInput1 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum1(otpnum);
  };

  const handleChangeOtpInput2 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum2(otpnum);
  };

  const handleChangeOtpInput3 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum3(otpnum);
  };

  const handleChangeOtpInput4 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum4(otpnum);
  };
  const handleChangeOtpInput5 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum5(otpnum);
  };

  const handleChangeOtpInput6 = (event) => {
    const { value, maxLength } = event.target;
    const otpnum = value.slice(0, maxLength);
    //set limit
    setOtpNum6(otpnum);
  };

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
                              type="text"
                              name="otp1"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp1}
                            />
                          </Form.Group>
                          <Form.Group as={Col} xs={2} md={2} controlId="otp2">
                            <Form.Control
                              className="form-control center"
                              type="text"
                              name="otp2"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp2}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp3">
                            <Form.Control
                              className="form-control center"
                              type="text"
                              name="otp3"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp3}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp4">
                            <Form.Control
                              className="form-control center"
                              type="text"
                              name="otp4"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp4}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp5">
                            <Form.Control
                              className="form-control center"
                              type="text"
                              name="otp5"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp5}
                            />
                          </Form.Group>

                          <Form.Group as={Col} xs={2} md={2} controlId="otp6">
                            <Form.Control
                              className="form-control center"
                              type="text"
                              name="otp6"
                              tabIndex="1"
                              maxLength="1"
                              onChange={handleOnChangeOptn}
                              value={$sampleOtp.otp6}
                            />
                          </Form.Group>
                        </Row>

                        {/* this will show after clicking verify with wrong input */}
                        {foundError && (
                          <div className="alert_message">
                            Incorrect OTP entered. / OTP expired Please re-enter
                            or resent OTP
                          </div>
                        )}
                      </div>

                      <div className="btn-wrapper">
                        <Button
                          onClick={validateForm}
                          className="btn-cstm"
                          variant="success"
                          size="lg"
                          type="submit"
                          disabled={$disableBtnVerify}
                        >
                          Verify
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="btnIconR"
                            color="white"
                          />
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
