// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Sudoku Solver Visualizer"
//               description="Developed a dynamic Sudoku solver using JavaScript, implementing a backtracking algorithm with visual feedback, real-time validation, and puzzle fetching from a backend API."
//               ghLink="https://github.comy"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Query-Quest"
//               description="Implemented a shortest path finder using Dijkstra's Algorithm, applicable to GPS navigation for route optimization and network analysis for identifying efficient data transmission paths."
//               ghLink="https://github.com/Abhijeet-Singh3107/Query-Quest"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="YUMYUM Restaurant Website"
//               description="Developed a responsive restaurant website with an interactive, visually appealing menu for an enhanced user experience. Gained hands-on experience in implementing front-end web development techniques."
//               ghLink="https://github.com/Abhijeet-Singh3107/YumYum-"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Text Data Analysis - YouTube Case Study"
//               description="Conducted data analysis on YouTube categories and trends using Sentiment Analysis and Word-cloud Generation."
//               ghLink="https://github.com"
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Sudoku Solver Visualizer"
              description="Developed a dynamic Sudoku solver using JavaScript, implementing a backtracking algorithm with visual feedback, real-time validation, and puzzle fetching from a backend API."
              ghLink="https://github.com/Abhijeet-Singh3107/Sudoko-Solver"
              demoLink="https://sudoku-solver-demo.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Query-Quest"
              description="Implemented a shortest path finder using Dijkstra's Algorithm, applicable to GPS navigation for route optimization and network analysis for identifying efficient data transmission paths."
              ghLink="https://github.com/Abhijeet-Singh3107/Query-Quest"
              demoLink="https://queryquestmern.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="YUMYUM Restaurant Website"
              description="Developed a responsive restaurant website with an interactive, visually appealing menu for an enhanced user experience. Gained hands-on experience in implementing front-end web development techniques."
              ghLink="https://github.com/Abhijeet-Singh3107/YumYum-"
              demoLink="https://capable-cannoli-895f5b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio Website"
              description="Crafted an interactive portfolio website with React.js to creatively exhibit my technical skills and personal projects."
              ghLink="https://github.com/Abhijeet-Singh3107/portfolio"
              demoLink="https://portfolio-one-hazel-72.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

