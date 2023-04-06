import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #7e7e7e;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>&copy; 2023 PitchIn. All rights reserved.</div>
      <SocialLinksContainer>
        <SocialLink href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-linkedin-in"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialLink>
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
