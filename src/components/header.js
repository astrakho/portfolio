import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import media from '../styles/media'
import Logo from '../content/icons/logo'

const HeaderContainer = styled.header`

  display: flex;
  justify-content: center;
  background: white;
  border-bottom: 1px solid #bac5d6;

` 

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1280px;

`

const LogoLink = styled(Link)`
  padding: 10px;
  margin-left: .5em;
  color: black;
  svg{
    width: 50px;
    height: 50px;
  }
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
  padding: .5em;
  text-decoration: none;
  transition-property: color;

  &:hover {
    background-color: #efeeff;
  }

  ${media.phone`margin-right: 0em;`};
  
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
        <Logo />
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