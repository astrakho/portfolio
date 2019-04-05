import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  padding-top: 5em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutWrapper>

          <Main> {children} </Main>
          <footer style = {{ textAlign: 'center', marginBottom: '1.45em' }}>
            © Built with
            { ` ` }
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            { ` ` } and { ` ` }
            <a href="https://reactjs.org/">React</a>
            .
            { ` ` }
            The source code is avaliable at my
            { ` ` }
            <a href="https://github.com/astrakho/portfolio">Github repository</a>.
          </footer>

        </LayoutWrapper>        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout