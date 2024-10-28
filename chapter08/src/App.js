import React, { Component } from 'react';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';
// import Repository from './Repository';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      //specify which routes render which components
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/github">GitHub</Nav.Link>
                {/* <Nav.Link href="/repository">Repository</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/github/user/:login/:id" component={GitHubUser} />
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route path="/*" component={NotFound} />
            {/* <Route path="/repository" component={Repository} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}


class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}
export default App;