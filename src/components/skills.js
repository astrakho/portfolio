
import React, { Component } from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';


class Skills extends Component {


  render() {

    console.log(this.props.data[0].node.frontmatter)


    return (

      <div>

        <div> { this.props.data[0].node.frontmatter.title } </div>
        <div> languages: { this.props.data[0].node.frontmatter.languages } </div>
        <div> front end: { this.props.data[0].node.frontmatter.frontEnd } </div>
        <div> back end: { this.props.data[0].node.frontmatter.backEnd } </div>
        <div> developer tools: { this.props.data[0].node.frontmatter.developerTools } </div>

      </div>

    )
  }
}

export default Skills;