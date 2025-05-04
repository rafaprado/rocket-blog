import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { BluePrint } from "../pages/Blueprint";
import { Article } from "../pages/Article";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BluePrint />}>
          <Route index element={<Home />} />
          <Route path="articles/:id" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
