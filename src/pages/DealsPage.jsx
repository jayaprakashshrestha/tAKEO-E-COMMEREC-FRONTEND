import React from "react";
import CNavbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import Footer from "../components/Footer";

function DealsPage() {
  return (
    <>
      <div>
        <CNavbar />

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded">
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/R.33bb8439590289b2ad3b5e8fa797d845?rik=Xc8fga%2b7uWmMSw&riu=http%3a%2f%2fwww.boutiquespaz.com%2fwp-content%2fuploads%2f2018%2f12%2fChristmas-Offers-2019-Extend-WEB_01.jpg&ehk=VgzXSck0jZOGcMxiy39kFnKPGrEwfC9GAZYaX3VZMEo%3d&risl=&pid=ImgRaw&r=0"
          />
          <Card.Body>
            <Card.Title className="ad-title">
              Christmas Day Special Offer
            </Card.Title>
            <Card.Text className="ad-description">
              50% off in any product
            </Card.Text>
            <Card.Text className="ad-promocode">
              Use promo code:{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                December 25
              </span>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://th.bing.com/th/id/OIP.5eKTXF8UqwqNX7ZVXyGXKQHaFP?pid=ImgDet&rs=1"
          />
          <Card.Body>
            <Card.Title className="ad-title">Free voucher</Card.Title>
            <Card.Text className="ad-description">
              Get free voucher on any orders in Christmas
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://static.vecteezy.com/system/resources/previews/000/189/431/non_2x/diwali-bumper-offer-sale-promotional-banner-with-hanging-lights-vector.jpg"
          />
          <Card.Body>
            <Card.Title className="ad-title">Bumper offers</Card.Title>
            <Card.Text className="ad-description">
              Buy one get one free
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="ad-container animate__animated animate__fadeInDown bg-light p-4 rounded mt-4">
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/buy-now-pay-later-stamp-grunge-vintage-isolated-white-background-sign-148243701.jpg"
          />
          <Card.Body>
            <Card.Title className="ad-title">Buy now And pay later</Card.Title>
            <Card.Text className="ad-description">
              Best solutions for finance
            </Card.Text>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    </>
  );
}

export default DealsPage;
