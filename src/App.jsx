
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layouts/Layout';
import { HomePage } from './views/Homepage';

function App() {


  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
    
  )
}

export default App
