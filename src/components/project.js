
import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"
import styled from "styled-components"

import media from '../styles/media'


const ProjectWrapper = styled.div`

  position: relative;

`

class Project extends React.Component{

  render(){

    return(

      <ProjectWrapper>
        
        {this.props.frontmatter.title}

        {this.props.frontmatter.github}

        {this.props.frontmatter.link}

        {this.props.frontmatter.description}

      </ProjectWrapper>

    )

  }

}





export default Project