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

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  border: none;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  resize: none;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: #1E90FF;
  color: #fff;
  cursor: pointer;
`;

const ContactUs = () => {
  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <ContactForm>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="text" placeholder="Subject" />
        <FormTextArea placeholder="Message"></FormTextArea>
        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
    </Wrapper>
  );
}

export default ContactUs;
