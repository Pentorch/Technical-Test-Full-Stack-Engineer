import { Container, Row, Col, Image } from "react-bootstrap";
import { dadu } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={dadu} fluid style={{ marginTop: "80px" }} />
        </Col>
        <Col md={6} style={{ marginTop: "150px" }}>
          <h1>The Dice Game</h1>
          <Link to="/rolldice">
            <button
              className="btn btn-warning text-white"
              style={{ fontWeight: "bold" }}
            >
              Start Game
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
