import './App.css';
import React from 'react';
import Banner from './components/Banner';
import 'victormono';
import Exhibit from './components/Exhibit';
function App() {
  return (
    <div className="App">
        <Banner title="Sextant" />
        <Exhibit heading="Embark">
            <ChildComponent />
            <ChildComponent />
            <ChildComponent />
        </Exhibit>


    </div>
  );
}

export default App;

