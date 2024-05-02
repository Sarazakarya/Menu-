import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
export default function CardList({ itemsList }) {
  return (
    <Row>
      <Zoom>
        {itemsList.length >= 1 ? (
          itemsList.map((item) => {
            return (
              <Col sm="12" className="mb-3" key={item.id}>
                <Card
                  className="d-flex flex-row"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">
                        <p>{item.title}</p>
                      </div>
                      <div className="item-price">
                        <p>{item.price}</p>
                      </div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">
                        <p>{item.description}</p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد اصناف</h3>
        )}
      </Zoom>
    </Row>
  );
}
