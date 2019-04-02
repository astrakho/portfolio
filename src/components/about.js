import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  max-width: 550px;
  justify-content: center;
  align-items: start;
  min-height: 70vh;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 550px;
`;

const Greeting = styled.h2`

  font-size: 2em;
  color: #666;
  font-weight: 300;
  line-height: 1.1;

`

class About extends Component {

  render() {

    return (

      <AboutContainer>

        <ContentContainer>

          <Greeting> Hello, I'm Alex </Greeting>

          <h1>I am a friendly software developer with a knack for user experience, robustness and optimization.</h1>

        </ContentContainer>

      </AboutContainer>

    );
  }
}

export default About;