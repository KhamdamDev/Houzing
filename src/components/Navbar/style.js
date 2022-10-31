import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export { Container, Wrapper, Section, Logo, Link, Main };
