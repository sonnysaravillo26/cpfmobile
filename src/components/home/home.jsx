import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "./../common/footer";
import NricForm from "./../common/nricForm";
import ConfirmMobile from "../common/confirmMobile";
import { infoPropertys } from "../../services/fakeDataService";

const Heading = React.lazy(() => import("./../common/heading"));

//Queue Registration
function Home() {
  const [$model, setModel] = useState([]);
  const [$showNricForm, setShowNricForm] = useState(false);
  const [$showMobileConfirm, setShowMobileConfirm] = useState(false);

  const navigate = useNavigate();

  const handleShowMobileConfirm = () => {
    setShowNricForm(false);
    setShowMobileConfirm(true);
  };

  const handleMobileConfirmYes = () => {
    console.log("handleMobile Click yes");
  };

  const handleMobileConfirmNo = () => {
    console.log("handleMobile Click no");
    navigate("/mobileForm");
  };

  useEffect(() => {
    setModel(infoPropertys);
    setShowNricForm(true);
  }, []);

  return (
    <React.Fragment>
      <Container fluid className="body_content">
        <Row>
          <Col>
            <Suspense fallback={<div>Loading...</div>}>
              <Heading />
            </Suspense> 
            {$showNricForm && (
              <NricForm
                model={$model}
                handleShowMobileConfirm={handleShowMobileConfirm}
              />
            )}

            {$showMobileConfirm && (
              <ConfirmMobile
                model={$model}
                mobileNumber={$model.mobileNumber}
                handleMobileConfirmYes={handleMobileConfirmYes}
                handleMobileConfirmNo={handleMobileConfirmNo}
              />
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
