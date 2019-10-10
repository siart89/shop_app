import React from 'react';
import Header from './pages/Header';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserMenu from './components/usersProfile/UserMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/logIn' component={LogIn} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/user/:logUser' component={UserMenu} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
