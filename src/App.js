import React from 'react';
import HomePage from './home.page';
import Modal from './modal.component';
import { ModalProvider } from './modal.context';

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <HomePage />
        <Modal />
      </div>
    </ModalProvider>
  );
}

export default App;
