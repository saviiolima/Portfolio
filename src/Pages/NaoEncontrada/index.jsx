import { useEffect } from "react";
import * as S from "./style";

export default function NaoEncontrada() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Página não encontrada | Sávio Lima";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <S.Container>
      <span className="code">404</span>
      <h1>Página não encontrada</h1>
      <p>O endereço que você abriu não existe ou foi movido.</p>
      <S.HomeLink to="/">Voltar ao início</S.HomeLink>
    </S.Container>
  );
}
