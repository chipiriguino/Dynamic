import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Calambre from "./pages/Calambre.jsx";
import Rodilla from "./pages/Rodilla.jsx";
import Rfibrilar from "./pages/Rfibrilar.jsx";
import Rfrancis from "./pages/Rfrancis.jsx";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="light">
  <Navbar.Brand href="/">DYNAMIC </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/contact">Contacto</Nav.Link>
      <Nav.Link href="/about">Sobre nosotros</Nav.Link>
      <NavDropdown title="Tratamientos"  id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/rodilla">Rodilla</NavDropdown.Item>
        <NavDropdown.Item href="/calambre">Rampas o calambres</NavDropdown.Item>
        <NavDropdown.Item href="/rfibrilar">Rotura fibrilar</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/rincondefrancis">El rincón de Francis</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/calambre" component={Calambre}/> 
          <Route exact path="/rodilla" component={Rodilla}/>
          <Route exact path="/rfibrilar" component={Rfibrilar}/>
          <Route exact path="/rincondefrancis" component={Rfrancis}/>
        </Switch>
        <footer>CLINICA DYNAMIC</footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
