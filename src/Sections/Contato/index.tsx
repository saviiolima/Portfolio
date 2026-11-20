import * as S from "./style";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { CONTACT } from "../../data/contact";

export default function Contato() {
  return (
    <S.Container id="contato" aria-labelledby="contato-titulo">
      <S.Content>
        <span className="tag">Contato</span>
        <h2 id="contato-titulo">Vamos conversar?</h2>
        <p>
          Tem um projeto, uma vaga ou só quer trocar uma ideia sobre sistemas e
          dados? Me escreva, respondo assim que possível.
        </p>

        <S.Actions>
          <S.PrimaryBtn href={`mailto:${CONTACT.email}`}>
            <FaEnvelope size={17} /> {CONTACT.email}
          </S.PrimaryBtn>
          <S.SecondaryBtn
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} /> LinkedIn
          </S.SecondaryBtn>
          <S.SecondaryBtn
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} /> GitHub
          </S.SecondaryBtn>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
}
