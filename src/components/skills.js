
import React, { Component } from 'react'
import Skill from './skill'
import styled from 'styled-components'
import media from '../styles/media'




const SkillsGrid = styled.div`

  display: grid; /* 1 */
  grid-template-columns: repeat(3, 300px); /* 2 */
  grid-gap: 10px; /* 3 */
  justify-content: center; /* 4 */

  ${media.desktop`grid-template-columns: repeat(2, minmax(300px, 1fr));`};

  ${media.tablet`grid-template-columns: repeat(1, minmax(300px, 1fr));`};

`

const Title = styled.h3`

`

class Skills extends Component {

  render() {

    return (
      <div>
        <Title> { this.props.data[0].node.frontmatter.title } </Title>
        <SkillsGrid>
          <Skill title =  "Languages" skills = { this.props.data[0].node.frontmatter.languages } />
          <Skill title =  "Front End" skills = { this.props.data[0].node.frontmatter.frontEnd } />
          <Skill title =  "Back End" skills = { this.props.data[0].node.frontmatter.backEnd } />
          <Skill title =  "Developer Tools" skills = { this.props.data[0].node.frontmatter.developerTools } />
        </SkillsGrid>
      </div>
    )
  }
}

export default Skills;