import { React, useRef ,useState} from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import emailjs from "@emailjs/browser";


const NewsLetter = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcyg5mi",
        "template_vu6c2pf",
        ref.current,
        "J2S4jw0GYE7k-IFNv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subcribe now to get useful traveling information</h2>

              <form ref={ref} onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="newsletter__input">
                  <input type="text" name="email" placeholder="Enter your email" />
                  <button  type ="submit"className="btn newsletter__btn">Subcribe</button>
                </div>
                {success &&
              ("Your are Subscribed Now. We'll get back to you soon :)")}
 
              </form>
              <p>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati adipisici sunt in, provident facere ipsam? */}
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
