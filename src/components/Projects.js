import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg0 from "../assets/img/nfilm.png";
import projImg4 from "../assets/img/npa.png";
import projImg from "../assets/img/nshop.png";
import projImg5 from "../assets/img/loanimg.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/nss.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Finance loan website",
      description:
        "I have created this project with paid and client also happy . i have used HTML, CSS, JS for fontend development ",
      imgUrl: projImg5,

      rl: "https://dfifinancial.com/",
    },
    {
      title: "Movie & TV Full Information ",
      description:
        "I built this project using React.js and Redux . I fetch TMDB API to get data ",
      imgUrl: projImg0,

      rl: "https://film-1d695.web.app/",
    },
    {
      title: "E-commerce ",
      description:
        "In this project i also used React js. Dynamic Search-bar functionality also add in this and security also add. full responsive design ",
      imgUrl: projImg,
      rl: "https://shop-94b23.web.app/",
    },
    {
      title: "car loan ",
      description: "it is also paid project which is i created .",
      imgUrl: projImg4,
      rl: "https://dfifinancial.com/car.html",
    },
    {
      title: "Business Startup",
      description: " it is now working on",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description:
        "it is another project which is i created for learning purpose in my clg",
      imgUrl: projImg3,
      rl: "https://shop.rasimkhan.xyz/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab3 </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="tabcontainer">
                          <h3>Devloper Details</h3>
                          <p>Contact Number : +91 6267492331</p>
                          <p>Gmail: shivanksahu2002@gmail.com</p>
                          <p>Address: Gwalior, Madhya Pradesh, India</p>
                         
                           <a href="#connect"> <button>Hire Me</button></a>
                          
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="tabcontainer">
                          <p id="para">
                            Also,I am working on a Python machine learning
                            project where I have created a handwritten digit
                            recognition model. For this project, I have utilized
                            various Python libraries such as Matplotlib, NumPy,
                            Pandas, and the MNIST dataset for images. To make
                            predictions for an image, I used Convolutional
                            Neural Networks. 
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
