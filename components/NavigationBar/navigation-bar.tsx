import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

const NavigationBar: React.FC = () => {
  const router = useRouter();
  const { push } = router;

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const title = e.currentTarget.title;
    push(`/${title}`);
  };

  return (
    <Container>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">CalcCentral</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link title="Home" href="/" onClick={handleNavigation}>
              Home
            </Nav.Link>
            <Nav.Link
              title="Calculate"
              href="/calculate"
              onClick={handleNavigation}
            >
              Calculate
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;