import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My favourite restaurants</h1>
      <div className="card">
        <div className="top">
          <h2>Mama Manoush</h2>
          <img
            src="https://thecitylane.com/wp-content/uploads/2018/09/DSCF0250.jpg"
            alt="place_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>r@mama-manoush.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
