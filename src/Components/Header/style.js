import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  width: 95px;
  height: 95px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 85px;
`;

export const LinkStyle = styled(Link)`
  font-family: "Roboto Mono", monospace;
  color: #e4ecec;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #e4ecec;
  &:hover {
    transform: scale(1.15);
  }
`;

