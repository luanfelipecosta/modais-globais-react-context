import React from 'react';
import { Button } from 'antd';
import { useModalContext } from './modal.context';

const HomePage = () => {
  const { openModal } = useModalContext();
  const testModal = () => openModal({ message: 'Olá, dev' });
  return (
    <>
      <h1>Modais personalizadas</h1>
      <Button onClick={testModal} type="primary">
        Abrir modal
      </Button>
    </>
  );
};

export default HomePage;
