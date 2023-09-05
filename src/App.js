import React from 'react';
import styles from './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EntryPage from './components/entry/EntryPage';

function App() {
  return (
    <section className={styles.page}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="rootPage" />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
