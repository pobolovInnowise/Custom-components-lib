 My Component Library

1)Установите библиотеку через npm:
npm install my-component-library-pobolov

2)Для работы библиотеки требуется React и ReactDOM. Если они не установлены в проекте-потребителе, установите их:
npm install react react-dom

3)Пример минимального приложения с компонентами:
import React, { useState } from 'react';
import { Button, Modal, Checkbox, Select, TextField, Switch } from 'my-component-library';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Пример использования компонентов</h1>

      <Button variant="contained" size="medium" onClick={() => setModalOpen(true)}>
        Открыть Модалку
      </Button>

      <Modal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <h2>Привет!</h2>
        <p>Это модальное окно из библиотеки.</p>
        <Button variant="text" size="small" onClick={() => setModalOpen(false)}>
          Закрыть
        </Button>
      </Modal>

      <Checkbox name="testCheckbox" value="1" id="cb1" />
      <Select options={['Summer', 'Autumn', 'Winter', 'Spring']} />
      <TextField label="Введите текст" variant="outlined" size="normal" name="text1" />
      <Switch name="switch1" value="switchValue" id="sw1" />
    </div>
  );
}

export default App;


