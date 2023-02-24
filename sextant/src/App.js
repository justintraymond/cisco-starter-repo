import './App.css';
import React, { useState } from 'react';
import Banner from './components/Banner/Banner';
import 'victormono';
import Tab from './components/Tab/Tab';
import TabPanel from './components/TabPanel/TabPanel';
import Sidebar from './components/Sidebar/Sidebar';
import IPAddressRequest from "./components/IPAddressRequest/IPAddressRequest";
import Card from "./components/Card/Card";
function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
    return (
    <div className="App">
        <div className={"Flex Banner"}>
            <Banner title="Sextant" />Header</div>
        {sidebarOpen && <div className="Flex Sidebar">Sidebar</div>}
        <div className={"Flex Card1"}>Data Card 1
            <Card><IPAddressRequest ipType="ipv4" /></Card>
        </div>
        <div className={"Flex Card2"}>Data Card 2
            <Card><IPAddressRequest ipType="ipv6" /></Card>
        </div>
        <div className={"Flex Card3"}>Data Card 3</div>
        <div className={"Flex Footer"}>Footer</div>
        <button className="Collapse-Button" onClick={toggleSidebar}>
        {sidebarOpen ? '<==' : '==>'}
      </button>
    </div>
  );
}

export default App;

