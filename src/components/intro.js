import {Col, Container, Row, Button} from "react-bootstrap"
const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">Get Ready For An Unforgettable Movie Experience!</div>
              <div className="introButton mt-4">
                <Button variant="light" href="#trending">Lihat Semua List</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro