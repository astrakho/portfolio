import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"




const IndexPage = ( { data } ) => (

  <Layout>

    <SEO title="Home" keywords={[`alexander strakhov`, `software`, `engineer`, `developer`, `portfolio`]} />
    
    <Hero />

    <Skills data = { data.skills.edges } />

    <Projects data = { data.projects.edges }/>

    <Contact />

  </Layout>
)

export default IndexPage

export const query = graphql`
query IndexQuery{

  hero: allMarkdownRemark {
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
          tech
          img {
            childImageSharp {
              fluid(maxWidth: 370, maxHeight:240, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }

  skills: allMarkdownRemark (
    filter: { fileAbsolutePath: { regex: "/skills/" } }
    ) {
    edges {
      node {
        frontmatter {
          title
          languages
          frontEnd
          backEnd
          developerTools
        }
      }
    }
  }


}
`