
import React, { Component } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  max-width: 550px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: start;
`;



class Contact extends Component {

  render() {

    return (

      <ContactContainer id = "contact">

        <h3>

          Contact

        </h3>

      </ContactContainer>

    );
  }
}

export default Contact;

