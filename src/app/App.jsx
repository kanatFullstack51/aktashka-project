import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from 'src/pages/HomePage';
import { Layout } from 'src/shared/Layout';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
