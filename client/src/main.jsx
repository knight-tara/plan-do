// ENTRY POINT FOR REACT APP

// Import component for dev mode checks
import { StrictMode } from 'react'

// Import function to create a React root element (DOM element in which UI components render themselves)
import { createRoot } from 'react-dom/client'

// Import main React component
import App from './App.jsx'

// Import global CSS file
import './index.css'

// Import React Slick CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import material UI theme
import { ThemeProvider } from '@emotion/react';
import theme from "./theme.jsx"


// Insert main React component into "root" div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
