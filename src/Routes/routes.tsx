import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Carregamento sob demanda das páginas para deixar o pacote inicial super leve
const Inicio = lazy(() => import("../Pages/Inicio"));
const Sobre = lazy(() => import("../Pages/Sobre"));
const Projetos = lazy(() => import("../Pages/Projetos"));
const NaoEncontrada = lazy(() => import("../Pages/NaoEncontrada"));

const BOOT_KEY = "boot-seen";

// Quem prefere movimento reduzido não precisa esperar a tela de boot
const prefersReducedMotion = () =>
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A tela de boot aparece só na primeira visita da sessão
const hasSeenBoot = () => {
  if (prefersReducedMotion()) return true;
  try {
    return sessionStorage.getItem(BOOT_KEY) === "1";
  } catch {
    return false;
  }
};

// Volta ao topo ao trocar de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const markBootSeen = () => {
  try {
    sessionStorage.setItem(BOOT_KEY, "1");
  } catch {
    // armazenamento indisponível: apenas mostra o boot de novo na próxima visita
  }
};

export default function Rotas() {
  const [isLoading, setIsLoading] = useState(() => !hasSeenBoot());

  if (isLoading) {
    return (
      <LoadingScreen
        onFinish={() => {
          markBootSeen();
          setIsLoading(false);
        }}
      />
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Suspense fallback={<div style={{ minHeight: "80vh" }} />}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Projetos />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}
