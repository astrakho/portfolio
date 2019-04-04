import React, { Component } from 'react';
import styled from 'styled-components';

import { FaGithub, FaStackOverflow } from "react-icons/fa"

const HeroContainer = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-height: 70vh;

`

const ContentContainer = styled.div`
  width: 90%;
  max-width: 700px;
`

const Greeting = styled.h2`

  font-size: 2em;
  color: #666;
  font-weight: 300;
  line-height: 1.1;

`

class Hero extends Component {

  render() {

    return (

      <HeroContainer>

        <ContentContainer>

          <Greeting> Hello, I'm Alex </Greeting>

          <h1>I am a friendly software developer with a knack for user experience, robustness and optimization.</h1>

        </ContentContainer>

        <div style = {{ display: "inline-block" }} >

          <FaGithub size = "2em" />

          <FaStackOverflow size = "2em" />

        </div>

      </HeroContainer>

    );
  }
}

export default Hero;