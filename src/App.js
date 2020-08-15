import React from 'react';
import Header from './components/Header';
import './custom.scss';
import './app.scss';
import './styles/header.css'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="App bg-light" fluid>
      <Header />
    </Container>
  );
}

export default App;
