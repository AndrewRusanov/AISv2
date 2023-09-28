import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EntryPage from './components/entry/EntryPage';
import MainPage from './components/main/MainPage';
import Profile from './components/main/content/profile/Profile';
import Liked from './components/main/content/liked/Liked';
import ResumeList from './components/main/content/resumeList/ResumeList';

function App() {
  return (
    <body className="page">
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/main" element={<MainPage />}>
          <Route index path="/main" element={<ResumeList />} />
          <Route path="liked" element={<Liked />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </body>
  );
}

export default App;
