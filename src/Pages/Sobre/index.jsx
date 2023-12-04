import {
  Main,
  DivTitulo,
  Section,
  Div,
  Paragraph,
  DivSecond,
  Alink,
  LinkImg,
  H1,
  Figure,
  Img,
} from "./style";
import Linked from "../../assets/linkedin.png";
import Savio from "../../assets/perfilp.png";

export default function Sobre() {
  return (
    <>
      <Main>
        <DivTitulo>
          <H1>Sobre mim</H1>
        </DivTitulo>
        <Section>
          <Div>
            <Paragraph>
              Olá! Eu sou Sávio Lima, 28 anos, do RN. Sou formado em Ciências
              Biológicas, migrei para Análise e Desenvolvimento de Sistemas e
              Front-End em 2022. Fascinado pela programação, busco ser um
              desenvolvedor frontend, unindo estética e usabilidade. Cada
              desafio é uma chance de aprendizado, determinado a aprimorar
              minhas habilidades. Estou entusiasmado com as possibilidades da
              programação e ansioso para contribuir na comunidade de
              desenvolvedores. Vamos criar juntos!
            </Paragraph>
            <DivSecond>
              <Alink href="https://www.linkedin.com/in/saviiolima/">
                <LinkImg src={Linked} alt="Linkedin" />
                <p>Linkedin</p>
              </Alink>
            </DivSecond>
          </Div>
          <Figure>
            <Img src={Savio} alt="Perfil" />
          </Figure>
        </Section>
      </Main>
    </>
  );
}
