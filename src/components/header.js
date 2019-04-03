import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import media from '../styles/media'





const HeaderContainer = styled.header`
  background: #ECECEC;
  padding: 0px 90px;

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

const NavLink = styled(Link)`
  border: 2px solid transparent;
  border-radius: 0;
  font-weight: 900;
  line-height: 1.25;
  margin-right: 1em;
  padding: 0;
  text-decoration: none;
  transition-property: color;
`

const sections = [
  {
    href: '/about/',
    label: 'About',
  },
  {
    href: '/projects/',
    label: 'Projects',
  },
  {
    href: '/contact/',
    label: 'Contact'
  }
];


const Header = ({ siteTitle }) => (



  <HeaderContainer>
    
    <NavBar>

      <LogoLink to="/">
        <Logo> {'<Alex />'}  </Logo>
      </LogoLink>


      <NavLinkContainer>

        {sections.map(({ href, label }) => (
          <NavLink
            key={label}
            to={href}
            activeClassName="active"
          >
            {label}
          </NavLink>
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
