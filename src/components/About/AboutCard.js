import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Abhijeet Singh </span>
            from <span className="purple"> UP, India.</span>
            <br />
            I am currently a student at Lovely Professional University
            <br />
            BTech in Computer Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What we do now echoes in eternity."{" "}
          </p>
          <footer className="blockquote-footer">Marcus Aurelius</footer>
        </blockquote>
      </Card.Body>

      <Card.Body id="education-section">
  <blockquote className="blockquote mb-0">
    <h1>
      <strong className="purple">Certificates</strong>
    </h1>
    <ul>
      <li className="about-activity">
        <ImPointRight />{" "}
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/7R7FQS6CAXR6"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          Programming in C++: A Hands-on Introduction Specialization (Codio)
        </a>
      </li>
      <li className="about-activity">
        <ImPointRight />{" "}
        <a
          href="https://www.coursera.org/account/accomplishments/certificate/9KP5AE9NWAA7"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          Server side JavaScript with Node.js | NIIT
        </a>
      </li>
      <li className="about-activity">
        <ImPointRight />{" "}
        <a
          href="https://www.coursera.org/account/accomplishments/certificate/29NNJW74GK5Z"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          HTML, CSS, and Javascript for Web Developers | Johns Hopkins University
        </a>
      </li>
    </ul>
  </blockquote>
</Card.Body>



      {/* Education Section with ID */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>
            <strong className="purple">Education</strong>
          </h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> B.Tech in Computer Science Engineering - Lovely
              Professional University (2022 - 2026)
            </li>
            <li className="about-activity">
              <ImPointRight /> 12th Grade - ICSE Board (PCM + Computer Science)
            </li>
            <li className="about-activity">
              <ImPointRight /> 10th Grade - ICSE Board
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
