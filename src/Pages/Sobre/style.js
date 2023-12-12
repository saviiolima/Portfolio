import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0.9px solid #041c1c;
  width: 100%;
  min-height: calc(110vh - 175px);
  color: #041c1c;

  @media screen and (max-width: 414px) {
  }
`;

export const DivTitulo = styled.div`
  display: flex;
  height: 140px;
  width: 60%;
  align-items: center;

  @media screen and (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const H1 = styled.h1`
  font-size: clamp(2rem, 3rem, 4rem);
  width: 250px;

  @media screen and (max-width: 414px) {
    font-size: 10vw;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
`;

export const Div = styled.div`
  width: 35vw;
  height: 40vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 414px) {
    display: flex;
    align-items: center;
    width: 100vw;
  }
`;

export const Paragraph = styled.p`
  color: #e4ecec;
  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  text-align: justify;
  line-height: 25px;
  width: 31vw;
  height: 100vh;

  @media screen and (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    line-height: 20px;
  }
`;

export const DivSecond = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Alink = styled.a`
  text-decoration: none;
  width: 12vw;
  height: 50px;
  display: flex;
  font-size: 1.1rem;
  font-family: "Roboto Mono", monospace;
  align-items: center;
  justify-content: space-evenly;
  border: #e4ecec solid 2px;
  border-radius: 10px;
  color: #e4ecec;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 414px) {
    display: flex;
    font-size: 1.1rem;
    align-items: center;
    width: 35vw;
    height: 5vh;
  }
`;

export const LinkImg = styled.img`
  font-size: clamp(1rem, 1.6rem, 2rem);
  font-family: "Roboto Mono", monospace;
  //transition: 1s;
  width: 2vw;

  @media screen and (max-width: 414px) {
    width: 25px;
  }
`;

export const Figure = styled.figure`
  //position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Img = styled.img`
  width: 22vw;
  height: 48vh;
  border-radius: 85px;
  z-index: 0;
  //filter: brightness(0.4);
  transition: 8ms;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const DivSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 25vh;
  width: 50vw;
`;

export const DivPar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImgSkills = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.3);
  }
  
  @media screen and (max-width: 414px) {
    max-height: 7vh;
}
`;
