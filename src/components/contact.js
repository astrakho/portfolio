
import React, { Component } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  background: #efeeff; 
  min-height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactContent = styled.div`
  max-width: 700px;
  margin-left: 20px;
  text-align: center;
`

class Contact extends Component {

  render() {

    return (

      <ContactContainer id = "contact">

        <h3>

          Contact

        </h3>

        <ContactContent>

          Currently, I am looking for an opportunity to join a growing company, that needs some help with web development.
          If you feel like I would be a good candidate for a position, feel free to email me at <a href = "mailto: astrakhov@ucdavis.edu" > astrakhov@ucdavis.edu </a>

        </ContactContent>

      </ContactContainer>

    );
  }
}

export default Contact;

