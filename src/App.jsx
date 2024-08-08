import React, { useState } from "react";
// import TrafficLight from "./Components/trafficLight/TrafficLight";
// import Practice from "./Components/Practice";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
      {/* <Practice></Practice> */}
      {/* <TrafficLight></TrafficLight> */}
    </div>
  );
};

export default App;
