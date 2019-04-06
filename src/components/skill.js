import React, { Component } from 'react'
import styled from 'styled-components'

const SkillWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1em;
  width: 100%;
  background: white;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const SkillTitle = styled.h3`

`
const SkillContent = styled.div`
  display: inline-block;
  padding: 5px;
  border: 1px solid gray;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  &:hover::after {
    opacity: 1;
  }
`

class Skill extends Component {
  render() {
    return (
      <SkillWrapper>
        <SkillTitle> 
          { this.props.title }   
        </SkillTitle>
        { this.props.skills.map(skill => <SkillContent key = { skill }> { skill } </SkillContent>) }
      </SkillWrapper>
    )
  }
}

export default Skill;