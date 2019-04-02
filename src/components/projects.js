
import { Link } from "gatsby"
import PropTypes, { node } from "prop-types"
import React from "react"
import styled from "styled-components"

import Project from "./project"
import media from "../styles/media"


const ProjectsWrapper = styled.div`

margin: 0 auto;
padding: 5em 1.0875rem 1em;
display: flex;
width: 100;
min-height: 100vh;
flex-direction: column;
justify-content: flex-start;
align-items: center;
  
`

const ProjectsGrid = styled.div`

  display: grid; /* 1 */
  grid-template-columns: repeat(3, 300px); /* 2 */
  grid-gap: 10px; /* 3 */
  justify-content: center; /* 4 */

  ${media.desktop`grid-template-columns: repeat(2, minmax(300px, 1fr));`};

  ${media.tablet`grid-template-columns: repeat(1, minmax(300px, 1fr));`};

`
const ProjectsFlex = styled.div`

  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

`

class Projects extends React.Component{

  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render(){

    let projects = []
    let flag = 0
    
    projects = this.props.data.map( project =>   
        
      <Project key = { project.node.frontmatter.id } frontmatter = {project.node.frontmatter} />

    )
    
    return(
      
      <ProjectsWrapper>

        <div> Projects </div>

        
        <ProjectsGrid>

          { projects }

        </ProjectsGrid>

      </ProjectsWrapper>

    )

  }





}



export default Projects







