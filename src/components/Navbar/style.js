import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
`;
const Section = styled.div`
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: coral;
  }
`;
const Logo = styled.img``;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;
export { Container, Wrapper, Section, Logo, Link };
