import { useState } from 'react'
import { ProjectPage } from 'src/pages/ProjectPage';
import { HomePage } from 'src/pages/HomePage';
import { Layout } from 'src/shared/Layout';
import './styles/App.css';

function App() {

  return (
    <div className="app">
      <Layout>
        <HomePage />
        <ProjectPage />
      </Layout>
    </div>
  )
}

export default App
