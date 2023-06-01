import { Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Tweets from "pages/Tweets/Tweets";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
