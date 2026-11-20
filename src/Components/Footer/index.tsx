import * as S from "./style";

export default function Footer() {
  return (
    <S.FooterContainer>
      <p>
        © {new Date().getFullYear()} Feito por <span>Sávio Lima</span>. Todos os
        direitos reservados.
      </p>
    </S.FooterContainer>
  );
}
