
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './components/auth/Login'

function App() {
  function onAuthRequired({ history }) {
    history.push('/login')
  }
  return (
    <Router>
      <Security
        issuer='https://dev-21656605.okta.com/oauth2/default'
        client_id='0oakbrco9nRGycM9J5d7'
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
      >
        <div className="App">
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/home' exact={true} Component={Home} />
              <SecureRoute path='/staff' exact={true} Component={Staff} />
              <Route
                path='/login'
                render={
                  () => (
                    <Login baseUrl='https://dev-21656605.okta.com' />
                  )
                }
              />
            </Routes>
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
