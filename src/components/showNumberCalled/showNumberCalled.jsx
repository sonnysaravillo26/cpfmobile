import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterDefault from "../common/footerDefault";

const Heading = React.lazy(() => import("../common/heading"));

function ShowNumberCalled() {

    const navigate = useNavigate();
    useEffect(() => {


    }, []);

    return (
        <React.Fragment>
            <Container fluid className="body_content animate__animated animate__bounceInRight">
                <h2 className="header_titleTwo">Your Queue No. is being Called!</h2>

                <br />

                <div className="queue_box color_gr animate__animated animate__flash animate__delay-1s">
                    <p>A1000</p>
                </div>

                <div className="queue_desc">
                    <p className="queue_desc_one">Please proceed to</p>
                    <p className="queue_desc_two" >
                        Counter 2, Level 1
                    </p>
                </div>
            </Container>

            <FooterDefault />
        </React.Fragment>
    );
}

export default ShowNumberCalled;
