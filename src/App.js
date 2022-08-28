import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Reserva from "./pages/Reserva";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Reserva></Reserva>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
