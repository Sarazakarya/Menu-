import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Category({ filtercategory }) {
  return (
    <Row>
      <Col sm={12} className="justify-content-center d-flex">
        <div className="justify-content-center d-flex">
          <button className="btn mx-2" onClick={() => filtercategory("الكل")}>
            الكل
          </button>
          <button className="btn mx-2" onClick={() => filtercategory("فطار")}>
            افطار
          </button>
          <button className="btn mx-2" onClick={() => filtercategory("غدا")}>
            غداء
          </button>
        </div>
      </Col>
    </Row>
  );
}
