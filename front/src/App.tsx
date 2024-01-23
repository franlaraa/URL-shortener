import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './components/logged/Profile';
import Header from './components/Header';
import UrlsPage from './pages/Urls';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='app mt-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/urls' element={<UrlsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
