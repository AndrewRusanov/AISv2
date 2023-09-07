import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EntryPage from './components/entry/EntryPage';
import MainPage from './components/main/MainPage';
import Content from './components/main/content/Content';
import Profile from './components/main/content/Profile';
import Liked from './components/main/content/Liked';

function App() {
  return (
    <body className="page">
      <Routes>
        <Route path="/entry" element={<EntryPage />} />
        <Route path="/" element={<MainPage />}>
          <Route index path="/" element={<Content />} />
          <Route path="liked" element={<Liked />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </body>
  );
}

export default App;
