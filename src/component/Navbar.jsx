import React, { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

export default function NavBar({ filtersearch }) {
  const [word, setWord] = useState("");
  function filtersearchword() {
    filtersearch(word);
    setWord('')
  }
  return (
    <Navbar bg="dark" variant="dark" className="w-100">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم جديد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="ابحث.."
              className="mx-2"
              onChange={(e) => setWord(e.target.value)}
              value={word}
            />
            <button
              className="btn-search"
              onClick={(e) => {
                e.preventDefault();
                filtersearchword();
              }}
            >
              بحث
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
