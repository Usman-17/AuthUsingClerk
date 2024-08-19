import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import { useUser } from "@clerk/clerk-react";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />

        <Route
          path="/about"
          element={isSignedIn ? <AboutPage /> : <Navigate to="/sign-in" />}
        />

        {/* Auth */}
        <Route path="sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
