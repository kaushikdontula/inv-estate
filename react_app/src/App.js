// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { InvAnalysis } from './components/InvAnalysis';
// import { PropVal } from './components/PropVal';
// import NavBar from './components/NavBar'; // Import the NavBar component
// import './App.css';

// function App() {
//   return (
//     <div className="App" style={{
//        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${process.env.PUBLIC_URL}/lux_home.jpeg)`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundAttachment: 'fixed',
//       minHeight: '100vh', // Ensure the background covers the entire viewport height
//       display: 'flex',
//       flexDirection: 'column',
//       // justifyContent: 'space-between' // Space between children elements
//     }}>
      
//       <h1> Re-elevate</h1>
//       <h2> A Simpler Way To Do Research, Taking Your Property Ventures To New Heights.</h2>

//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/investment_analysis" element={<InvAnalysis />} />
//           <Route path="/property_valuation" element={<PropVal />} />
//         </Routes>
//       </Router>

//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { InvAnalysis } from './components/InvAnalysis';
import { PropVal } from './components/PropVal';
import NavBar from './components/NavBar'; // Import the NavBar component
import LandingPage from './components/LandingPage'; // Import the LandingPage component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/investment_analysis" element={<InvAnalysis />} />
        <Route path="/property_valuation" element={<PropVal />} />
      </Routes>
    </Router>
  );
}

export default App;

