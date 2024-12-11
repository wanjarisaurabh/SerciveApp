import React from "react";
import Navbar from "./Component/Navbar";
import Herosection from "./Component/Herosection";
import Feature from "./Component/Feature";
import Workflow from "./Component/Workflow";
import Pricing from "./Component/pricing";
import Testymonial from "./Component/Testymonial";
import Footer from "./Component/Foter";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Herosection />
        <Feature />
        <Workflow />
        <Pricing />
        <Testymonial />

        <Footer />
      </div>
    </>
  );
};

export default App;
