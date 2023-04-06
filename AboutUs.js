import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const AboutUsHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutUsContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsHeading>About Us</AboutUsHeading>
      <AboutUsContent>
        PitchIn is an online platform that connects investors with registered companies that are seeking funding for their projects. Our platform focuses on both established companies and startups, providing opportunities for investors to support projects at different stages of development. We aim to make investing more accessible, transparent, and rewarding for all parties involved.
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
