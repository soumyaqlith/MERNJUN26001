import React from "react";

function Home(props) {
  return (
    <div>
      Home
      <br />
      Name :{props.name}
      <br />
      Age :{props.age}
      <br />
      Email :{props.obj.email}

      <br />
      student name :{props.obj.std1.name}
    </div>
  );
}

export default Home;
