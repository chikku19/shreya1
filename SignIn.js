import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  width: 400px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignIn = ({ handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    handleClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </Modal>
    </ModalOverlay>
  );
};

export default SignIn;
