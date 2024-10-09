import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import './App.css';
import Overview from './Overview';
import BridgeDetail from './BridgeDetail';
import React, { useState } from 'react';
import BridgeList from './BridgeList';
import BridgeDescription from './BridgeDescription';
import Contact from './Contact';
import AboutUs from './Aboutus';
import Footer from './Footer';
import DateTime from './dateTime';

function App() {
  const [description, setDescription] = useState(false);
  const [contact, setContact] = useState(false);
  const [detail, setDetail] = useState(false);
  const [selectedBridge, setSelectedBridge] = useState(null);

  const showContact = () => {
    setContact(true);
  };
  const showDetail = () => {
    setDetail(true);
  };
  const showDescription = (item) => {
    setDescription(true);
    setSelectedBridge(item);
  };
  const Close = () => {
    setDescription(false);
    setContact(false);
    setDetail(false);
  };
  return (
    <div className="App">
      <Header showContact={showContact} />
      <Routes>

        <Route path='/' element={<Homepage showDescription={showDescription} />} />
        <Route path='/overview' element={<Overview description={description} showDescription={showDescription} Close={Close} />} />
        <Route path='/detail' element={<BridgeDetail showDetail={showDetail} detail={detail} Close={Close} />} />
        <Route path='/bridgelist' element={<BridgeList />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="*" element={<Homepage showDescription={showDescription} />} />

      </Routes>


      {contact && <Contact Close={Close} />}
      {description && <BridgeDescription item={selectedBridge} Close={Close} />}


      <Footer showContact={showContact} />
      <DateTime />
    </div>
  );
}

export default App;
