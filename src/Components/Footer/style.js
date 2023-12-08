import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 15px;
  gap: 15px;
  padding: 32px;
  height: 70px;
  border-top: 0.9px solid #041c1c;
`;

export const Alink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  display: block;
  height: 35px;
  margin: 0 auto;
  &:hover {
    transform: scale(1.20);
    transform: rotate(30deg);
  }
`;
