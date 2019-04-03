
import React, { Component } from 'react'
import Cloud from './cloud'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const SkillsWrapper = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

`

const Title = styled.h3`


`

class Skills extends Component {


  render() {

    console.log(this.props.data[0].node.frontmatter)


    return (

      <SkillsWrapper>

        <Title> { this.props.data[0].node.frontmatter.title } </Title>
        <Cloud title =  "languages" skills = { this.props.data[0].node.frontmatter.languages } />
        <div> front end: { this.props.data[0].node.frontmatter.frontEnd } </div>
        <div> back end: { this.props.data[0].node.frontmatter.backEnd } </div>
        <div> developer tools: { this.props.data[0].node.frontmatter.developerTools } </div>

      </SkillsWrapper>

    )
  }
}

export default Skills;