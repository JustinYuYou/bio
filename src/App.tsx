import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { BackgroundImageHeader } from './components/BackgroundImageHeader';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='main'>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <body>
        <BackgroundImageHeader></BackgroundImageHeader>
      </body>
      <Footer></Footer>
    </div>
  );
}


const NavigationBar = () => <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Experience</Nav.Link>
        <Nav.Link href="#link">Project</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

export default App;
