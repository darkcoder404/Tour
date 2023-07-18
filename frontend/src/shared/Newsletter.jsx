<<<<<<< HEAD



import { React, useRef ,useState} from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
=======
import { React, useRef ,useState} from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
>>>>>>> e9ca718161b804a949ad61d561c55f5120db0d7d
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
<<<<<<< HEAD
          <Col >
            <div className="newsletter__content">
              <h2>SUBSCRIBE NOW</h2>
=======
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subcribe now to get useful traveling information</h2>
>>>>>>> e9ca718161b804a949ad61d561c55f5120db0d7d

              <form ref={ref} onSubmit={handleSubmit}>
                <div className="newsletter__input">
                  <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="newsletter__input">
                  <input type="text" name="email" placeholder="Enter your email" />
                  <button  type ="submit"className="btn newsletter__btn">Subcribe</button>
                </div>
                {success &&
<<<<<<< HEAD
              <div>Your are Subscribed Now. We'll get back to you soon</div> }
 
              </form>
              <p>
                Are you passionate about travel, adventure, and discovering new
                destinations? 🌍✈️ Don't miss out on the latest updates,
                exclusive travel tips, and special offers that will make your
                wanderlust heart skip a beat! Subscribe to our newsletter now
                and join our ever-growing community of adventure seekers.
              </p>
            </div>
          </Col>

=======
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
>>>>>>> e9ca718161b804a949ad61d561c55f5120db0d7d
        </Row>
      </Container>
    </section>
  );
};

<<<<<<< HEAD
export default NewsLetter;
=======
export default NewsLetter;
>>>>>>> e9ca718161b804a949ad61d561c55f5120db0d7d
