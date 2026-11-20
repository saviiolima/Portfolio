import * as S from "./style";
import { CONTACT } from "../../data/contact";

export default function Footer() {
  return (
    <S.FooterContainer>
      <p>
        © {new Date().getFullYear()} Feito por <span>Sávio Lima</span>. Todos os
        direitos reservados.
      </p>
      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
    </S.FooterContainer>
  );
}
