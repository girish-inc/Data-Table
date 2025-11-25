import React from 'react';
import LeadTable from './components/LeadTable';
import {leadsData} from './data/leadsData';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className="title">Lead Management</h1>
            <LeadTable data={leadsData}/>
        </div>
    );
}

export default App;
