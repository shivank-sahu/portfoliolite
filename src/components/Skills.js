import meter1 from "../assets/img/67-removebg-preview.png";
import meter2 from "../assets/img/30-removebg-preview.png";
import meter3 from "../assets/img/57-removebg-preview.png";
import meter4 from "../assets/img/80.png";
import meter5 from "../assets/img/69-removebg-preview.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills </h2>
              <p style={{ fontStyle: "italic", fontWeight: "700" }}>
                As a web designer, I have a strong focus on developing visually
                appealing and user-friendly websites using HTML, CSS, React, and
                JavaScript. Over the years, I have gained valuable experience in
                creating live projects that are not only functional, but also
                engaging for users. Additionally, also working
                with Nodejs, MongoDB, and Python to further enhance the
                functionality of my creations.
                <br />
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider "
              >
                <div className="item">
                  <img
                    src={meter4}
                    alt="Image"
                    style={{ width: "250px" }}
                    className=" skillimg"
                  />
                  <h5>HTML, CSS</h5>
                </div>
                <div className="item">
                  <img
                    src={meter1}
                    alt="Image"
                    style={{ width: "250px" }}
                    className=" skillimg"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src={meter5}
                    alt="Image"
                    style={{ width: "250px" }}
                    className=" skillimg"
                  />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img
                    src={meter3}
                    alt="Image"
                    style={{ width: "250px" }}
                    className=" skillimg"
                  />
                  <h5>Nodejs, MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src={meter2}
                    alt="Image"
                    style={{ width: "250px" }}
                    className=" skillimg"
                  />
                  <h5> Python </h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
