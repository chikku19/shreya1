import React from 'react';
import styled from 'styled-components';

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

const CompaniesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const CompanyCard = styled.div`
  width: 300px;
  margin-right: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
`;

const EstablishedCompanies = () => {
  return (
    <Wrapper>
      <Title>Established Companies</Title>
      <CompaniesWrapper>
        <CompanyCard>
          <h3>Company 1</h3>
          <p>Description of company 1</p>
          <button>Invest Now</button>
        </CompanyCard>
        <CompanyCard>
          <h3>Company 2</h3>
          <p>Description of company 2</p>
          <button>Invest Now</button>
        </CompanyCard>
        <CompanyCard>
          <h3>Company 3</h3>
          <p>Description of company 3</p>
          <button>Invest Now</button>
        </CompanyCard>
        <CompanyCard>
          <h3>Company 4</h3>
          <p>Description of company 4</p>
          <button>Invest Now</button>
        </CompanyCard>
        <CompanyCard>
          <h3>Company 5</h3>
          <p>Description of company 5</p>
          <button>Invest Now</button>
        </CompanyCard>
        <CompanyCard>
          <h3>Company 6</h3>
          <p>Description of company 6</p>
          <button>Invest Now</button>
        </CompanyCard>
      </CompaniesWrapper>
    </Wrapper>
  );
}

export default EstablishedCompanies;
