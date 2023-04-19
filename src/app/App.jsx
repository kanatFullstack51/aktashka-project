import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProjectPage } from 'src/pages/ProjectPage';
import { HomePage } from 'src/pages/HomePage';
import { Layout } from 'src/shared/Layout';

import './styles/App.css';

function App() {

  return (
    <Router>
      <div className="app">

        <Layout>
          <Routes>
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/projectPage/' exact={true} element={<ProjectPage />} />
          </Routes >
        </Layout>

      </div>
    </Router>

  )
}

export default App
