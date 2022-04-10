import React from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import PartsInput from "./components/PartsInput";
import PartsList from "./components/PartsList";
import CategoriesChart from "./components/CategoriesChart";

function Main() {
  return (
    <Container>
      <Accordion className="m-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-center">
            Part Creator
          </Accordion.Header>
          <Accordion.Body>
            <PartsInput />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="text-center">
            Categories Price Chart
          </Accordion.Header>
          <Accordion.Body>
            <CategoriesChart />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Card className="m-3 p-3">
        <Card.Body>
          <Card.Title className="text-center fs-2 mb-5">Parts List</Card.Title>
          <PartsList />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Main;
