import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import media from '../styles/media'

const HeaderContainer = styled.header`
  background: white;
  padding: 0px 90px;
  border-bottom: 1px solid #bac5d6;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
` 

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`

const LogoLink = styled(Link)`
  border: 0;
  margin-right: 0.5rem;
  min-width: 42px;
  padding: 0;
  position: relative;
  text-decoration: none;
`

const Logo = styled('div')`
  padding: .5em;
  margin: auto;
`

const NavLinkContainer = styled.div`
display: flex;
align-items: center;
`

const AnchorLinkStyled = styled(AnchorLink)`
  border: 2px solid transparent;
  border-radius: 0;
  font-weight: 500;
  line-height: 1.25;
  margin-right: 1em;
  padding: 0;
  text-decoration: none;
  transition-property: color;
`

const sections = [
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#contact',
    label: 'Contact'
  }
];

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <NavBar>
      <LogoLink to="/">
        <Logo style = {{ color: "black" }} > {'<Alex />'}  </Logo>
      </LogoLink>
      <NavLinkContainer>
        {sections.map(({ href, label }) => (
          <AnchorLinkStyled
            key = { label }
            style = {{ color: "black" }}
            href = { href }
          >
            {label}
          </AnchorLinkStyled>
        ))}
      </NavLinkContainer>
    </NavBar>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header