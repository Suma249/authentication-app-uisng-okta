
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' exact={true} component={Home} />
            <Route path='/' exact={true} component={Staff} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
