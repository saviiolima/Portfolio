import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Carregamento sob demanda das páginas para deixar o pacote inicial super leve
const Inicio = lazy(() => import("../Pages/Inicio"));
const Sobre = lazy(() => import("../Pages/Sobre"));
const Projetos = lazy(() => import("../Pages/Projetos"));

export default function Rotas() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<div style={{ minHeight: "80vh" }} />}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Projetos />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}
