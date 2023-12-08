import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 185px);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  display: flex;
  gap: 15px;
`;

export const DivTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const H1 = styled.h1`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 35px;
  padding: 12px;
  color: #041c1c;
`;

export const H2 = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 25px;
  padding: 12px;
  color: #041c1c;
`;

export const Img = styled.img`
  height: 430px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Linkedin = styled.img`
  font-size: clamp(1rem, 1.6rem, 2rem);
  text-transform: uppercase;
  font-family: "Roboto Mono", monospace;
  transition: 0.1s;
  width: 34px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PdfSavio = styled.img`
  font-size: clamp(1rem, 1.6rem, 2rem);
  text-transform: uppercase;
  font-family: "Roboto Mono", monospace;
  transition: 0.1s;
  width: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ALink = styled.a`
  display: flex;
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  align-items: center;
  justify-content: space-evenly;
  width: 10vw;
  height: 50px;
  margin: 10px;
  text-decoration: none;
  border: #041c1c solid 2px;
  border-radius: 10px;
  color: #041c1c;
  cursor: pointer;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
