import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("pages/Home/Home"));
const Tweets = lazy(() => import("pages/Tweets/Tweets"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
