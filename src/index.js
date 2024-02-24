import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { theme } from 'utils/theme.js';
import {store, persistor} from './redux/store.js';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter basename="/react-app-test-work">
       <ThemeProvider theme={theme}>
         <App />
        </ThemeProvider> 
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
