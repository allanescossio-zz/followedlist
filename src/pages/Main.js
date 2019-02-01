import React, { Component } from 'react';
import styled from 'styled-components';
import SpotifyLogin from 'react-spotify-login';
import logo from 'assets/images/logo.svg';

const Container = styled.div`
  text-align: center;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;  
`;

const Logo = styled.img`
  height: 40vmin;
  width: 80vmin;
`;

const LoginButton = styled(SpotifyLogin)`
  background-color: #1ED761;
  border: #1ED761;
  border-radius: 1vmin;
  width: 16vmin;
  height: 5vmin;
  color: #fff;  
  text-decoration: none;  
  font-weight: 600; 
  cursor: pointer; 
`

export default class Main extends Component {  

  onAuthSuccess(response) {
    window.sessionStorage.setItem('token', response.access_token)        
    this.props.history.push('/followed') 
  }

  render() {
    const clientId = process.env.REACT_APP_CLIENT_ID,
          redirectUri = 'http://localhost:3000/callback'  
    
    return (
      <Container>        
        <Logo src={logo} />
        <LoginButton
          buttonText='Login'
          clientId={clientId}
          redirectUri={redirectUri}
          scope='user-follow-read'
          onSuccess={response => this.onAuthSuccess(response)} />                  
      </Container>
    );
  }
}


