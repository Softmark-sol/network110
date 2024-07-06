import React from "react";
import Home from "./pages/Home";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ParticleEffect from "./components/Particles";
const App = () => {
  return (
    <div>
      <Home />
      <ParticleEffect />
    </div>
  );
};

export default App;
