import { Button, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [coloring, setcoloring] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      console.log(coloring);
      setcoloring(!coloring);
    }, 3000);
  });

  return (
    <div
      style={
        coloring
          ? { backgroundColor: "rgba(12, 94, 80, 0.75)" }
          : { backgroundColor: "yellowgreen" }
      }
      className="ftr container"
    >
      <Row>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-instagram"></i>
          </Button>
        </Col>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-facebook"></i>
          </Button>
        </Col>
        <Col>
          <Button variant="secondary">
            <i className="fa-brands fa-twitter"></i>
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
