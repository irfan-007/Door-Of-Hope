import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();

  //     <Button size="lg" variant="success" onClick={() => navigate("/home")}>
  //     HOME
  //   </Button>
  //   <Button size="lg" variant="warning" onClick={() => navigate("/about")}>
  //     ABOUT
  //   </Button>

  return (
    <div>
      <div>
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          variant="dark"
          bg="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => navigate("/home")}>HOME</Nav.Link>
                <Nav.Link onClick={() => navigate("/institutions")}>
                  INSTITUTIONS
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/login")}>LOGIN</Nav.Link>
                <Nav.Link onClick={() => navigate("/contact")}>
                  CONTACT
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/about")}>ABOUT-US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <span
              style={{
                color: "white",
                fontFamily: "sans-serif",
                width: "auto",
                textAlign: "center",
                backgroundColor: "transparent",
                padding: 8,
                fontSize: "1.5rem",
                borderRadius: "20px",
              }}
            >
              DOOR OF HOPE
            </span>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
