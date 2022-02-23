import { Button } from "react-bootstrap";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="ftr container">
      <div className="row">
        <div className="col">
          <Button variant="secondary">
            <i class="fa-brands fa-instagram"></i>
          </Button>
        </div>
        <div className="col">
          <Button variant="secondary">
            <i class="fa-brands fa-facebook"></i>
          </Button>
        </div>
        <div className="col">
          <Button variant="secondary">
            <i class="fa-brands fa-twitter"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
