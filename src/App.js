import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Reserva from "./pages/Reserva";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Reserva></Reserva>}></Route>
        </Route>
        <Route path="/checkout" element={<Layout></Layout>}>
          <Route index element={<Checkout></Checkout>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
