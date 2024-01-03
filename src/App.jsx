import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import { HomePage } from './views/Homepage';
import { Gallery } from './views/Gallery';
import { Workshops } from './views/Workshops';
import { About } from './views/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/workshops' element={<Workshops />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
