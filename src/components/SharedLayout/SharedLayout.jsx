import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link, Nav } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </Nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
}
