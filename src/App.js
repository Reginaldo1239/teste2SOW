import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Routers from './routers';

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
