import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './components/logged/Profile';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app mt-48'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
