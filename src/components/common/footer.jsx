import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="main_footer">
      <Container>
        <Row>
          <Col>
            <div className="footer_desc"> 
              <FontAwesomeIcon icon={faGlobe} color="white" />
              <span> View page in your preferred language</span>
            </div>
          </Col>
        </Row>
        <Row> 
          <Col>
            <div className="lang_sec">
              <button type="button" className="btn btn-link">中文</button>
            </div>
          </Col>
          <Col>
            <div className="lang_sec">
              <button type="button" className="btn btn-link">Bahasa Melayu</button>
            </div>
          </Col>
          <Col>
            <div className="lang_sec">
              <button type="button" className="btn btn-link">தமிழ்</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
