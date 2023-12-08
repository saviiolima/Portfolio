import styled from "styled-components";

export const Subtitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2rem, 3rem, 4rem);
  margin-bottom: 20px;
  height: 140px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 10px;
  line-height: 1.5em;
  font-family: "Roboto Mono", monospace;
  color: #041c1c;
`;

export const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 350px;
  margin-right: 30px;
  border-radius: 8px;
`;

export const Name = styled.p`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 600;
  color: #e4ecec;
  font-family: "Roboto Mono", monospace;
`;

export const Image = styled.img`
display: flex;
align-items:center;
justify-content:center;
width: 300px;
height: 180px;
object-fit: cover;
`;
