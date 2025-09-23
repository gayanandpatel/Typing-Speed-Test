import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
    return (
        
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                       
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;