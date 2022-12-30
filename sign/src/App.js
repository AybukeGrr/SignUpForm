import { Card } from '@mui/material';
import './App.css';
import SignUpForm from './components/SignUpForm';
import "./components/style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Card id='card'>
        <SignUpForm />
      </Card>
      {/* <Container>
        <Row>
          <Col>
            <Card id="card">
              <SignUpForm />
            </Card>
          </Col>
          <Col>
            <img src="signUp.jpg" />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
