import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Dashboard = ({ user, onSignOut }) => {
  const handleSignOut = () => {
    onSignOut();
  };
 // const name = object?.name;


  return (
    <Wrapper>
      <Title>Welcome, {"user.name"}!</Title>
      <div>
        <p>Profile:</p>
        <ul>
          <li>Name: {"user.name"}</li>
          <li>Email: {"user.email"}</li>
        </ul>
      </div>
      <div>
        <p>Theme:</p>
        <button>Dark</button>
        <button>Light</button>
      </div>
      <button onClick={handleSignOut}>Sign out</button>
    </Wrapper>
  );
};

export default Dashboard;
