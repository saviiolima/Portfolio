import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";

// A página de erro raramente é aberta: carrega só quando necessário
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

const markBootSeen = () => {
  try {
    sessionStorage.setItem(BOOT_KEY, "1");
  } catch {
    // armazenamento indisponível: apenas mostra o boot de novo na próxima visita
  }
};

// Rola até a seção do endereço (#sobre, #projetos...) ou volta ao topo
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
}

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
      <ScrollManager />
      <Header />

      <Suspense fallback={<div style={{ minHeight: "80vh" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Endereços antigos continuam funcionando */}
          <Route
            path="/sobre"
            element={
              <Navigate to={{ pathname: "/", hash: "#sobre" }} replace />
            }
          />
          <Route
            path="/projetos"
            element={
              <Navigate to={{ pathname: "/", hash: "#projetos" }} replace />
            }
          />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}
