import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    {/* to get the support of the context we have to wrap our app component with the contextprovider. */}
    <PlayerContextProvider>
        <App />
    </PlayerContextProvider>
    
    </BrowserRouter>
  
)
