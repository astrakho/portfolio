import React, { Component } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2em;
  background: #efeeff;
  padding-bottom: 4em;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const ContactContent = styled.div`
  max-width: 930px;
  padding: 0em 1em 0em 1em;
  text-align: start;
  font: 112.5%/1.45em georgia, serif;
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

