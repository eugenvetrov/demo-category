import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app';
import '@/assets/styles/index.scss';
import { Provider } from 'react-redux';
import { rootStore } from './stores/rootStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
