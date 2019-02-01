import React, { Component } from 'react'
import styled from 'styled-components'
import api from 'services/api'

const MainContainer = styled.div`  
`

const FollowedRow = styled.div`  
  float: left;
  width: 33.33%;
  text-align: center;  
  margin-bottom: 30px; 
`

const AvatarContainer = styled.div`
  
`
const InfoContainer = styled.div`
  width: 100%;
`

const Avatar = styled.img`  
  width: 50%;
  border-radius: 50%;
`

const TitleRow = styled.a`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`
const SubTitleRow = styled.p`  
  font-size: 14px;  
  margin: 0;

`

export default class FollowedList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      followeds: []      
    }
  }  

  componentDidMount() {
    this.loadFolloweds()
  } 

  loadFolloweds = async () => {    
    const response = await api.get(`/followeds/${window.sessionStorage.getItem('token')}`)   
    this.setState({ followeds: response.data })
  }    

  renderFolloweds() {
    const { followeds } = this.state
    return (  
      <MainContainer>  
        {followeds.map((f) => {
          return (
            <FollowedRow> 
              <AvatarContainer>
                <Avatar src={f.image_url} />
              </AvatarContainer>  
              <InfoContainer>
                <TitleRow onClick={() => window.open(f.external_url)}>{f.name}</TitleRow>
                <SubTitleRow>{f.genres}</SubTitleRow>
              </InfoContainer> 
              
            </FollowedRow>
          )
        })}          
      </MainContainer>  
    )
  }

  render() {
    
    return (
      <div>
        {this.renderFolloweds()}
      </div>
    )
  }
}
