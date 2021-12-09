import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import MobileForm from './components/mobileForm/mobileForm';
import Home from './components/home/home';
import MobileOtpForm from './components/mobileOtpForm/mobileOtpForm';
import ShowNumber from './components/showNumber/showNumber';
import ShowNumberCalled from './components/showNumberCalled/showNumberCalled';
import StatusQr from './components/statusQr/statusQr';
import EntryExceed from './components/entryExceed/entryExceed';

import { Container, Row, Col } from 'react-bootstrap';
import imgLionMark from './components/images/lion-mark.png';
import imgCpfLogo from './components/images/cpf-logo.svg';

function App() {

  return (
    <Router>
      <div>
        <Container fluid className='main_header'>
          <Row className='top_header_border'>
            <Col>
              <div className='top_header_container text'>
                <img src={imgLionMark} align="left" /> A Singapore Government Agency
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><img src={imgCpfLogo} className='imgLogo' /></p>

              <div className="shorcuts">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/mobileForm">Mobile Confirmation</Link>
                  </li>
                  <li>
                    <Link to="/mobileOtpForm">Mobile Otp Form</Link>
                  </li>
                  <li>
                    <Link to="/showNumber">Show Number</Link>
                  </li>
                  <li>
                    <Link to="/showNumberCalled">Show Number Called</Link>
                  </li>
                  <li>
                    <Link to="/statusQr">Status QR Code</Link>
                  </li>
                  <li>
                    <Link to="/EntryExceed">Input Exceeded</Link>
                  </li>
                </ul>
              </nav>
              </div>

              <div className='siteName'>
                <h5>
                  Welcome to Maxwell Service Centre
                </h5>
              </div>
            </Col>
          </Row>
        </Container>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/entryExceed' element={<EntryExceed />} />
          <Route path='/statusQr' element={<StatusQr />} />
          <Route path='/showNumberCalled' element={<ShowNumberCalled />} />
          <Route path='/showNumber' element={<ShowNumber />} />
          <Route path='/mobileOtpForm' element={<MobileOtpForm />} />
          <Route path='/mobileForm' element={<MobileForm />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;