import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Image src="assets/marvel-logo.png" alt='logo' />
  </Container>
);

const Container = styled.div`
height: 6em;
border-bottom: 1px solid #393939;
background-color: #202020;
text-align:center;
padding:1em 0;
`;

const Image = styled.img`
width:10em;
height:4em;
`;

export default Header;