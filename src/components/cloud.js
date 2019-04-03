
import React, { Component } from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';







const CloudWrapper = styled.div`

  width: 280px; height: 80px;
  background: #3498db;
  border-radius: 100px;
  position: relative;


  &:before,
  &:after{ 

    content: '';
    position: absolute;
    background: #3498db;
    z-index: -1;

  }

  &:after{

    width: 90px; height: 90px;
    top: -50px; left: 35px;
    border-radius: 100px;

  }

  &:before {

    width: 140px; height: 140px;
    top: -80px; right: 40px;
    border-radius: 200px;

  }

`

const CloudContent = styled.div`


  width: 80%;
  text-align: center;

`



class Cloud extends Component {


  render() {

    return (
      
      <CloudWrapper>

        <CloudContent>

        { this.props.title }
        { this.props.skills }

        </CloudContent>

      </CloudWrapper>

    )
  }
}

export default Cloud;