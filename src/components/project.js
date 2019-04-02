import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { FaGithub, FaLink } from "react-icons/fa"


import media from "../styles/media"


const ProjectWrapper = styled.div`

  position: relative;
  margin: 20px;

`



const TechWrapper = styled.div`

  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

`
const Tech = styled.div`

  padding: 5px;
  border: 1px solid gray;
  margin: 2px;
  border-radius: 10px;
  &:hover::after {
    opacity: 1;
  }

`



const IconLink = styled.a`
  padding: 0px;
  svg {
    width: 20px;
    height: 20px;
  }
`;




class Project extends React.Component{

  render(){

    let techUsed = this.props.frontmatter.tech.map(tech =>
      
        <Tech key = {tech}> { tech + " " } </Tech>      
      
      )

    return(

      <ProjectWrapper>
        
        <Img fluid = { this.props.frontmatter.img.childImageSharp.fluid } />

        <h3> { this.props.frontmatter.title } </h3>

        <IconLink href = { this.props.frontmatter.github } >

          <FaGithub />

        </IconLink>

        <IconLink href = { this.props.frontmatter.link }>

          <FaLink />

        </IconLink>

        <h5> { this.props.frontmatter.description } </h5>


        <h5> Technologies: </h5>

        <TechWrapper>

          { techUsed }

        </TechWrapper>

      </ProjectWrapper>

    )

  }

}


export default Project