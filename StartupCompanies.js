import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CompanyCard from './CompanyCard';

const Wrapper = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

const CompanyList = [
  {
    name: 'Company 1',
    description: 'Description of company 1',
  },
  {
    name: 'Company 2',
    description: 'Description of company 2',
  },
  {
    name: 'Company 3',
    description: 'Description of company 3',
  },
  {
    name: 'Company 4',
    description: 'Description of company 4',
  },
  {
    name: 'Company 5',
    description: 'Description of company 5',
  },
  {
    name: 'Company 6',
    description: 'Description of company 6',
  },
];

const StartupCompanies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Title>Startup Companies</Title>
      <SliderWrapper>
        <Slider {...settings}>
          {CompanyList.map((company) => (
            <CompanyCard name={company.name} description={company.description} key={company.name} />
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

export default StartupCompanies;
