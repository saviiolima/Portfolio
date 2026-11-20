import Inicio from "../../Sections/Inicio";
import Sobre from "../../Sections/Sobre";
import Projetos from "../../Sections/Projetos";
import Contato from "../../Sections/Contato";

// Página única: as seções seguem em sequência e o menu rola até cada uma
export default function Home() {
  return (
    <main>
      <Inicio />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  );
}
