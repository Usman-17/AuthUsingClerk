import { BrowserRouter, Routes } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
