import React from 'react';
import Review from './Review';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  return (
  <main>
    <div className="card">
      <h5 className="card-title">Our reviews</h5>
      <Review />
      </div>
  </main>
  )
}

export default App;
