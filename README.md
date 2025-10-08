My Component Library

1)Установите библиотеку через npm:
npm install custom-library-pobolov

2)Пример минимального приложения с компонентами:
import React from 'react';
import './App.css';
import {Button, Select, TextField} from "custom-library-pobolov";
import "custom-library-pobolov/dist/index.css";

function App() {
return (
<>
<Select options={['a','b','c']}/>
<Button variant={"contained"} size={"large"}/>
<TextField/>
</>
);
}

export default App;
