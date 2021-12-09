import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterDefault from "../common/footerDefault";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Heading = React.lazy(() => import("../common/heading"));

function EntryExceed() {

    const navigate = useNavigate();
    useEffect(() => {
 
    }, []);

    return (
        <React.Fragment>
            <Container fluid className="body_content animate__animated animate__bounceInRight">  
                <br/>
                <FontAwesomeIcon icon={faTimesCircle} className="fa-5x" color="darkred" />
                <h3 className="qr_status qr_invalid">Max Input</h3>

                <div className="status_desc">
                    <p>You exceed multiple input</p>
                </div>
            </Container> 
            <FooterDefault />
        </React.Fragment>
    );
}

export default EntryExceed;
