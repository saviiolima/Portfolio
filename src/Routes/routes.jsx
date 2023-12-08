import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Inicio from "../Pages/Inicio";
import Sobre from "../Pages/Sobre";
import Projetos from "../Pages/Projetos";
import Footer from "../Components/Footer";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />}></Route>
          <Route path="/Projetos" element={<Projetos />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
