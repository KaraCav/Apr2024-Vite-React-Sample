import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import ConvoView from './components/Conversations/Convo';
import GroupView from './components/GroupActivity/GroupChat';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Record from './components/Record/Record';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communicate" element={<h1>TEST</h1>} />
          { /*  <Route path="/users/:id" element={<SingleUser />} /> */}
          <Route path="/record" element={<Record></Record>} />
          <Route path="/settings" element={<h1>SETTINGS</h1>} />
        </Routes>
        {/* <Home></Home> */}
        {/* <Communicate></Communicate> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;