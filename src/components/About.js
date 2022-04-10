import React from "react";
import { Card, Container, Image } from "react-bootstrap";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import profil from "../assets/profil.jpg";

function About() {
  return (
    <Container>
      <Card className="m-3 p-4 d-flex justify-content-center align-items-center">
        <Image src={profil} style={{ height: 300, width: 300 }} roundedCircle />
        <Card.Body>
          <Card.Title className="fs-3 text-center">Jacek Polański</Card.Title>
          <Card.Text className="px-5 py-2">
            I am JavaScript/React bootcamp graduate. As a Front-End developer I
            would like to create modern, visually attractive applications that
            contain logic connecting front and back in one perfect UX. In
            previous job I was generally responsible for containerised cargo
            stowage and segregation as well as vessel maintenance. Main reason
            to join IT is my family, as my son was born, half year or more
            absence from home is no longer a valid option. Above said, I'm
            committed to learn and work to expand my knowledge.{" "}
          </Card.Text>
        </Card.Body>
        <div>
          <a
            className="link-dark"
            href="https://github.com/jacpolanski"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="3rem" className="mx-2" />
          </a>
          <a
            className="link-dark"
            href="https://www.linkedin.com/in/polanski-jacek"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="3rem" className="mx-2" />
          </a>
        </div>
      </Card>
    </Container>
  );
}

export default About;
