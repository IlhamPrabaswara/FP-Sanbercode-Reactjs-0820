import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import logo from "../assets/logo.png";
import { AuthContext } from "../../components/authcontext";



const Header = () => {
  const [user, setUser] = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault()
    setUser(null)
    localStorage.removeItem("user")
    localStorage.clear()
  }

  return (

    <header>
      <img alt="Sanbercode logo" id="logo" src={logo} width="200px" />
      <nav className="login">
        {
          user === null && (
            <>
              <Link to="/login"><Button variant="primary" >Login</Button></Link>
              <Link to="/register"><Button style={{ marginLeft: "15px" }} variant="primary" >Register</Button></Link>
            </>
          )
        }

        {
          user !== null && (
            <>
              <Button sty variant="primary" >{user.name}</Button>
              <Button style={{ marginLeft: "15px" }} variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
            
          )
        }
      </nav>
    </header>

  );
};

export default Header