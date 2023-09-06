import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryPage from './components/entry/EntryPage';
import MainPage from './components/main/MainPage';

function App() {
  return (
    <body className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="mainPage" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
