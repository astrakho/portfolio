import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import About from "../components/about"


const IndexPage = ( { data } ) => (
  <Layout>
    <SEO title="Home" keywords={[`alexander strakhov`, `software`, `engineer`, `developer`, `react`]} />
    
    <About data = { data.about.edges }/>

  </Layout>
)

export default IndexPage


export const query = graphql`
query{

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
}

`