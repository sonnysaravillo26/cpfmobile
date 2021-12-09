import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FooterMobileOtpForm() {
  const [otpCounterEnable, setOtpCounterEnable] = useState(false);
  const [counterVisible, setCounterVisible] = useState(false);
  let [countingCounter, setCountingCounter] = useState(10);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSentOtp = () => {
    setCounterVisible(true);
    setOtpCounterEnable(true);

    var timer = setInterval(() => {
      countingCounter--;
      // console.log("Counting : " +countingCounter)
      setCountingCounter(countingCounter);
      if (countingCounter <= 0) {
        clearInterval(timer);
        setOtpCounterEnable(false);
        setCounterVisible(false);
        setCountingCounter(10); // set back to 10
      }
    }, 1000);
  };

  return (
    <div className="main_footer">
      <Container>
        <Row>
          <Col>
            <div className="bottom_sectwo">
              <button
                type="button"
                className="btn btn-link"
                disabled={otpCounterEnable}
                onClick={handleSentOtp}
              >
                Resent OTP
                {counterVisible ? <span> ( {countingCounter} ) </span> : null}
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="bottom_sectwo">
              <button
                type="button"
                className="btn btn-link"
                onClick={handleBackToHome}
              >
                Return Main Menu
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FooterMobileOtpForm;
