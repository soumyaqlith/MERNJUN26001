import "./Navbar.css";

function Navbar() {
 
  
    let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  
  return (
    <div className="nav-container">
      <div>Nav Logo</div>
      <button className="btn">{isLogin ? "Profile" : "Login"}</button>
    </div>
  );
}

export default Navbar;
