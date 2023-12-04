import styled from "styled-components";

export const Main = styled.main`
  border-top: 0.9px solid #041c1c;
  width: 100%;
  min-height: calc(100vh - 185px);
  color: #22463c;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DivTitulo = styled.div`
  display: flex;
  height: 140px;
  width: 60%;
  align-items: center;
`;
export const H1 = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-size: clamp(2rem, 3rem, 4rem);
  width: 250px;
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
`;

export const Paragraph = styled.p`
  color: #e4ecec;
  font-family: "Roboto Mono", monospace;
  font-size: 15px;
  text-align: justify;
  line-height: 25px;
  width: 31vw;
  height: 100vh;
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
`;

export const LinkImg = styled.img`
  font-size: clamp(1rem, 1.6rem, 2rem);
  font-family: "Roboto Mono", monospace;
  //transition: 1s;
  width: 2vw;
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
`;
