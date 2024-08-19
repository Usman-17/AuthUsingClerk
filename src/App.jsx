import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
