import React from "react";
import { Card, Container } from "react-bootstrap";
import PartsInput from "./components/PartsInput";
import PartsList from "./components/PartsList";

function App() {
  return (
    <Container>
      <Card className="m-3 p-3">
        <Card.Body>
          <Card.Title className="text-center">Part Creator</Card.Title>
          <PartsInput />
        </Card.Body>
      </Card>
      <Card className="m-3 p-3">
        <Card.Body>
          <Card.Title className="text-center">Parts List</Card.Title>
          <PartsList />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
