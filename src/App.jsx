import { useState } from "react";
// import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
