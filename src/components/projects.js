import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Project from "./project"
import media from "../styles/media"

const ProjectsWrapper = styled.div`
  margin: 0 auto;
  padding: 2em 0px 4em 0px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ProjectsGrid = styled.div`
  display: grid; /* 1 */
  grid-template-columns: repeat(3, 300px); /* 2 */
  grid-gap: 10px; /* 3 */
  justify-content: center; /* 4 */
  padding: 0 1em 0 1em;
  margin-top: 2em;

  ${media.desktop`grid-template-columns: repeat(2, minmax(300px, 1fr));`};
  ${media.tablet`grid-template-columns: repeat(1, minmax(300px, 1fr));`};
`

class Projects extends React.Component{

  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render(){
    let projects = []
    projects = this.props.data.map( project =>   
      <Project key = { project.node.frontmatter.id } frontmatter = {project.node.frontmatter} />
    )
    
    return(
      <ProjectsWrapper id = "projects">
        <h3 style = {{ marginBottom: "0px" }} > Projects </h3>
        <ProjectsGrid>
          { projects }
        </ProjectsGrid>
      </ProjectsWrapper>
    )
  }
}

export default Projects