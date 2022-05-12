import { Container } from "../../components/Layout/Container";
import { Text } from "../../components/Layout/Text";
import { Title } from "../../components/Layout/Title";

import "./styles.scss";

export function Public() {
  return (
    <Container>
      <section className="main-content">
        <Title>Public Page</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          maxime minima sequi. Doloremque in consequatur sed, aspernatur quas
          nisi quibusdam perspiciatis assumenda saepe modi, maxime temporibus
          accusamus veniam, facere quisquam.
        </Text>
      </section>
    </Container>
  );
}
