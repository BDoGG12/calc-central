import React from "react";
import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const HomeComponent: React.FC = () => {

    const router = useRouter();
    const {push} = router;

    const handleBegin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        push('/calculate');
    };

  return (
    <Container>
      <div>
        <p>Welcome to CalcCentral. Start calculating your mean, median, and mode!</p>
      </div>
      <Button variant="light" onClick={handleBegin}>Begin</Button>
    </Container>
  );
};

export default HomeComponent;
