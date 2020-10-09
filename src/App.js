import React from 'react';
import { ToastProvider } from 'react-toast-notifications'

import Login from './pages/login'
import ListEmployees from './pages/listEmployees';
import Routers from './routers'

function App() {
  return (
    <ToastProvider
    autoDismiss
    autoDismissTimeout={3000}
    placement="top-center"
  > 
   <Routers></Routers>
   </ToastProvider>
  );
}

export default App;
