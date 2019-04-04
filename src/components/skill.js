
import React, { Component } from 'react'
import styled from 'styled-components'



const SkillWrapper = styled.div`

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1em;
  width: 100%;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`

const SkillTitle = styled.h3`

`

const SkillContent = styled.div`

  display: inline-block;

  margin-right: .3em

`

class Skill extends Component {

  render() {

    return (
      <SkillWrapper>
        <SkillTitle> 
          { this.props.title }   
        </SkillTitle>
        { this.props.skills.map(skill => <SkillContent> { skill } </SkillContent>) }
      </SkillWrapper>
    )
  }
}

export default Skill;