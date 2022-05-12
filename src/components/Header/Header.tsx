import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Container } from "../Layout/Container";
import "./styles.scss";

export function Header() {
  const { user } = React.useContext(AuthContext);

  return (
    <header className="application-header">
      <Container>
        <section className="header-content">
          <h1 className="title">React Template</h1>
          {user.login ? (
            <Link to="/logout" className="logout">
              Logout
            </Link>
          ) : null}
        </section>
      </Container>
    </header>
  );
}
