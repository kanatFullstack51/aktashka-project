import { useState } from 'react'
import { ProjectPage } from 'src/pages/ProjectPage';
import { HomePage } from 'src/pages/HomePage';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <HomePage />
      <ProjectPage />
    </div>
  )
}

export default App
