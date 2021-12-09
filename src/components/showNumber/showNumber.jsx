import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterDefault from "../common/footerDefault";

const Heading = React.lazy(() => import("./../common/heading"));

function ShowNumber() { 
    const navigate = useNavigate();
     
    useEffect(() => {  
    }, []);

    return (
        <React.Fragment>
            <Container fluid className="body_content animate__animated animate__bounceInRight">
                <h2 className="header_titleTwo">Your Queue No.</h2>
                <br />

                <div className="queue_box animate__animated animate__flash animate__delay-1s">
                    <p>A1000</p>
                </div>
                <div className="queue_desc">
                    <p className="queue_desc_one">Please proceed to</p>
                    <p className="queue_desc_two" >
                        Level 1 Waiting Area
                    </p>
                </div>
                <hr />
                <div className="queue_acc">
                    <p>
                        Your queue number may not be called in sequence.
                        If you accidentally close this page, please scan the QR code again.
                    </p>
                </div>

                <br />
                <div className="queue_btns">
                    <p>
                        For more information on:
                    </p>
                    <div className="btn-wrapper2">
                        <Button className="btn-cstm" 
                            variant="success" 
                            size="lg" 
                            target="_blank"
                            href="https://www.cpf.gov.sg/member"
                            >
                            Retirement
                        </Button>
                    </div>
                    <div className="btn-wrapper2">
                        <Button className="btn-cstm" 
                            variant="success" 
                            size="lg"
                            target="_blank"
                            href="https://www.cpf.gov.sg/member"
                            >
                            Nomination
                        </Button>
                    </div>
                </div>
            </Container>

            <FooterDefault />
        </React.Fragment>
    );
}

export default ShowNumber;
