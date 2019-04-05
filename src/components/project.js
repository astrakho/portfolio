import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaGithub, FaLink } from "react-icons/fa"

const ProjectWrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 1em;
  background: white;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
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