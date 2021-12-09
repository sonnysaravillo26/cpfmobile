import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function FooterMobileForm() {
  return (
    <div className="main_footer">
      <Container> 
        <Row>
          <Col>
            <div className="bottom_sectwo">
              <button type="button" className="btn btn-link">Don't have a Mobile Number</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FooterMobileForm;
