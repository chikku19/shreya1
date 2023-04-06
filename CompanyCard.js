import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 300px;
  margin-right: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
`;

const CompanyCard = ({ name, description, buttonText, buttonOnClick }) => {
  return (
    <CardWrapper>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={buttonOnClick}>{buttonText}</button>
    </CardWrapper>
  );
}

export default CompanyCard;
