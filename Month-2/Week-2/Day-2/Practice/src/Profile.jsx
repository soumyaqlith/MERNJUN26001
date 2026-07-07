import React from "react";

function Profile({fullName,children}) {
  return (
    <div>
      Profile
      <br />
     Name :{fullName}

     {children}
    </div>
  );
}

export default Profile;
