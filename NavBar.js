import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
`;

const NavLink = styled.a`
  margin-left: 2rem;
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo href="#">PitchIn</Logo>
      <div>
        <NavLink href="#">About Us</NavLink>
        <div>
          <NavLink href="#">Companies</NavLink>
          <ul>
            <li><NavLink href="#">Established Companies</NavLink></li>
            <li><NavLink href="#">Startups</NavLink></li>
          </ul>
        </div>
        <NavLink href="#">Contact Us</NavLink>
        <NavLink href="#">Sign In</NavLink>
      </div>
    </Nav>
  );
}

export default NavBar;
