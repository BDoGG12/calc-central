import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useRouter } from "next/router";

const ChoiceCalc: React.FC = () => {
  const calcChoice: string[] = ["Mean", "Median", "Mode"];

  const router = useRouter();
  const {push} = router;

  const handleCalcChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    push('/results');
  };

  return (
    <Container>
      <Form>
        {calcChoice.map((type) => (
          <div key={type} className="mb-3">
            <Form.Check type="checkbox" id={type} label={type} />
          </div>
        ))}
        <Button onClick={handleCalcChoice}>Next</Button>
      </Form>
    </Container>
  );
};

export default ChoiceCalc;
