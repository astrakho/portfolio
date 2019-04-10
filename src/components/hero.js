import React, { Component } from 'react';
import styled from 'styled-components';
import { FaGithub, FaStackOverflow, FaEnvelope } from "react-icons/fa"

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-height: 70vh;
`

const ContentContainer = styled.div`
  width: 90%;
  margin-top: 50px;
  max-width: 700px;
`

const Greeting = styled.h2`
  font-size: 2em;
  color: #666;
  font-weight: 300;
  line-height: 1.1;
`

const IconLink = styled.a`
  padding: 0px;
  margin-right: 25px;
  margin-left: 25px;
  color: black;
  svg {
    width: 2.5em;
    height: 2.5em;
  }

  &:hover{
    color: purple;
  }
`

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <ContentContainer>
          <Greeting> Hello, I'm Alex </Greeting>
          <h1 style = {{ textAlign: "start" }} >I am a friendly software developer with a knack for user experience, robustness and optimization.</h1>
        </ContentContainer>

        <div style = {{ display: "inline-block", marginBottom: "25px" }} >
          <IconLink href =  "https://github.com/astrakho">
            <FaGithub size = "2.5em" />
          </IconLink>

          <IconLink href = "mailto: astrakhov@ucdavis.edu">
            <FaEnvelope size = "2.5em" />
          </IconLink>

          <IconLink href = "https://stackoverflow.com/users/10860988/alexander-strakhov" >
            <FaStackOverflow size = "2.5em" />
          </IconLink>
        </div>
      </HeroContainer>
    );
  }
}

export default Hero;