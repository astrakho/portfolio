import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



import About from "../components/about"


import Projects from "../components/projects"


const IndexPage = ( { data } ) => (
  <Layout>
    <SEO title="Home" keywords={[`alexander strakhov`, `software`, `engineer`, `developer`, `react`]} />
    
    <About data = { data.about.edges }/>

    <Projects data = { data.projects.edges }/>

  </Layout>
)

export default IndexPage

export const query = graphql`
query IndexQuery{

  about: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }

  projects: allMarkdownRemark (
    filter: { fileAbsolutePath: { regex: "/projects/" } }
    sort: { fields: [frontmatter___id], order: ASC }
    ) {
    edges {
      node {
        frontmatter {
          title
          id
          github
          link
          description
        }
      }
    }
  }



}
`