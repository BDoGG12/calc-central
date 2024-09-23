// import { useRef } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import {useRouter} from 'next/router';

const Calculate: React.FC = () => {

    const router = useRouter();
    const {push} = router;

    const handleSubmit = () => {
        push('/calc-choice');
    }

  return (
    <Container>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            First Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Second Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Third Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Fourth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Fifth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Sixth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Seventh Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Eighth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Ninth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>

        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Tenth Number:{" "}
          </Form.Label>
        </Form.Group>
        <Col sm="10">
          <Form.Control defaultValue={0} type="number" />
        </Col>
        <Button onClick={handleSubmit}>Next</Button>
      </Form>
    </Container>
  );
};

export default Calculate;