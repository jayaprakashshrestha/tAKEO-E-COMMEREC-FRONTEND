import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <>
      <CNavbar />
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Contact Details</Card.Title>
                <Card.Text>
                  <strong>Company Name:</strong> Nateshwori online Store
                </Card.Text>
                <Card.Text>
                  <strong>Establish On:</strong> 1993-Oct-4
                </Card.Text>
                <Card.Text>
                  <strong>Number of Branches:</strong> 300 Branches all over the
                  World
                </Card.Text>
                <Card.Text>
                  <strong>Ratings:</strong> 5 starts out of 5
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-dark text-white">
                <Row className="justify-content-center align-items-center">
                  <Col xs={6} className="text-center">
                    <Card.Img
                      src="https://media.licdn.com/dms/image/C4D03AQHNJCIwWuTe6Q/profile-displayphoto-shrink_800_800/0/1653556733646?e=1693440000&v=beta&t=QfDc7e0sC3NE9tRRmhNTWJJYvPCFpwV3WKwD09jKE2s"
                      alt="CEO Photo"
                      className="img-fluid rounded-circle"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="mt-2">
                      <strong>CEO:</strong> Yogesh Bhattrai
                    </div>
                  </Col>
                  <Col xs={6} className="text-center">
                    <Card.Img
                      src="https://media.licdn.com/dms/image/C4E03AQGJu4DrFpYHcw/profile-displayphoto-shrink_800_800/0/1616892728484?e=1693440000&v=beta&t=KHV_Bg2oERqGtGAIJLwg9MSrTz061N0DHRf091dib1Y"
                      alt="Proprietor Photo"
                      className="img-fluid rounded-circle"
                      style={{
                        width: "150px",
                        height: "150px",
                        marginTop: "20px",
                      }}
                    />
                    <div>
                      <strong>Proprietor:</strong> Blake Ruwali
                    </div>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
