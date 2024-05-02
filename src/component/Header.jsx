import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Row>
        <Col sm={12} className="justify-content-center text-center">
          <p className="title">قائمة الطعام</p>
          <div className="justify-content-center d-flex">
            <p className="underline"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
