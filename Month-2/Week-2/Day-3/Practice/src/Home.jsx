import React, { useContext } from "react";
import { nameContext, themeContext } from "./App";
import Home2 from "./Home2";

function Home() {
  const name = useContext(nameContext);
  const theme=useContext(themeContext)
  return (
    <div>
      Home
      <br />
      Name : {name}

      <br />
      theme :{theme}

      <Home2/>
    </div>
  );
}

export default Home;
