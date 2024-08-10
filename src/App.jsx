import { useState } from "react";
import { Modal } from "./components/Modal";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
