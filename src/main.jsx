import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App';
import { Layout } from './shared/Layout'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <Layout>
        <App />
      </Layout>
    </div>
  </React.StrictMode >,
)
