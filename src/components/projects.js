
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import media from '../styles/media'


const ProjectsWrapper = styled.div`

margin: 0 auto;
maxWidth: 960;
padding: 5em 1.0875rem 1em;
display: flex;
min-height: 100vh;
flex-direction: column;
justify-content: space-between;
align-items: center;
  
`

const ProjectsGrid = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill, 178px);
grid-gap: 10px;
justify-content: center;


`


class Projects extends React.Component{

  render(){

    return(
      
      <ProjectsWrapper>

        <div> Projects </div>

        <ProjectsGrid>



        </ProjectsGrid>


      </ProjectsWrapper>

    )

  }





}







