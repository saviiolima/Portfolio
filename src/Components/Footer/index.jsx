import Git from "../../assets/github.png";
import { FooterContainer, Alink, Img } from "./style"

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <p>Feito por Sávio Lima</p>
        <Alink href="https://github.com/saviiolima">
          <Img src={Git} alt="github" />
        </Alink>
      </FooterContainer>
    </>
  );
}
