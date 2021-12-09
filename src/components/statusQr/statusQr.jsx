import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterDefault from "../common/footerDefault";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const Heading = React.lazy(() => import("../common/heading"));

function StatusQr() {

    const navigate = useNavigate();
    useEffect(() => {
 
    }, []);

    return (
        <React.Fragment>
            <Container fluid className="body_content animate__animated animate__bounceInRight">  
                <br/>
                <FontAwesomeIcon icon={faExclamationTriangle} className="fa-5x" color="darkred" />
                <h3 className="qr_status qr_invalid">Invalid QR Code</h3>

                <div className="status_desc">
                    <p>Please scan the QR Code again</p>
                </div>
            </Container> 
            <FooterDefault />
        </React.Fragment>
    );
}

export default StatusQr;
