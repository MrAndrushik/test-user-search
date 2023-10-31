import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import { SelectedUserProvider } from '@/providers/SelectedUserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectedUserProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </SelectedUserProvider>
  </React.StrictMode>,
);
