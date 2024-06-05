import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home';

function AppRouter () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  )
}

export default AppRouter; 