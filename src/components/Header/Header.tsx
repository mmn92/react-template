import { Container } from "../Layout/Container";
import "./styles.scss";

export function Header() {
  return (
    <header className="application-header">
      <Container>
        <h1 className="title">React Template</h1>
      </Container>
    </header>
  );
}
