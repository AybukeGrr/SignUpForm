import { Card } from "@mui/material";
// import "./App.css";
import SignUpForm from "./components/SignUpForm";
import "./components/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "@mui/system";
import "./components/style.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col className="signImage">
            <img src="signUp.jpg" />
          </Col>
          <Col className="formColumn">
            <Card id="card">
              <SignUpForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
