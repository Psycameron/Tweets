import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
