import React from 'react';  
import { HashRouter as Router } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Home from './components/Home';  
import About from './components/About';  
import Skills from './components/Skills';

import './App.css';  

function App() {  
    return (  
        <Router>  
            <div className='App'>  
                <Navbar />  
                <div id="home"><Home /></div>  
                <div id="about"><About /></div> 
                <div id="skills"><Skills /></div>  
            </div>  
        </Router>  
    );  
}  

export default App;
