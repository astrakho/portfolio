import React, { Component } from 'react';
import styled from 'styled-components';





class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

render() {

  return (

    <div>
      {this.props.data[0].node.frontmatter.title}
    </div>

  );
}
}

export default About;