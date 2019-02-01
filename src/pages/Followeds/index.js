import React, { Component } from 'react'
import FollowedList from './FollowedList'
import styled from 'styled-components'

const TitleContainer = styled.div`
  text-align: center;
`
const Title = styled.h1`
  margin-bottom: 50px
  font-size: 40px;
`


export default class Followed extends Component {
  render() {
    return (
      <div>
        <TitleContainer>
          <Title>Artistas Seguidos</Title>    
        </TitleContainer>  
        <FollowedList />
      </div>
    )
  }
}
