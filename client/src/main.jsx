import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-r8nqukzhcpbshw2g.us.auth0.com"
    clientId="0kCqUivsXU6qnNZKRXaiaT1rfw7hmCP5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
