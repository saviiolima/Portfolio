import { Main, Section, Div, DivTwo, DivThree, Img, H1, H2, ALink, Linkedin, PdfSavio } from "./style.js";
import Perfil from "../../assets/perfil.png";
import Linked from "../../assets/linkedin.png"
import Curriculo from "../../assets/pdf.png"

export default function Inicio() {
  return (
    <>
      <Main>
        <Section>
          <Div>
            <DivTwo>
            <H1>SÁVIO LIMA</H1>
            <H2>DESENVOLVEDOR FRONT-END</H2>
            <DivThree>
             <ALink target="_blank" href="https://www.linkedin.com/in/saviiolima/">
            <Linkedin src={ Linked } alt="Linkedin" />
            <p>Linkedin</p>
          </ALink>
          <ALink href="/Portfolio/public/SavioLima.pdf" download={true}>
            <PdfSavio src={ Curriculo } alt="Curriculo" />
            <p>Curriculo</p>
          </ALink>
            </DivThree>
            </DivTwo>               
            <Img src={Perfil} alt="perfil" />    
          </Div>

        </Section>
      </Main>
    </>
  );
}
