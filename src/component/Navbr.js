import { Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom';
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router";
function Navbr(){
  let history=useHistory();
  function logout(){
    localStorage.clear();
    history.push('/login');
  }
    return (
      <>
 <Navbar bg="primary" expand="lg" >
  <Link className="navbar-brand text-white" to="/">Navbar scroll</Link>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px', }}
      navbarScroll
    >
      {
        localStorage.getItem('user-info')?
        <>
        <Link className="nav-link text-white" to="/showUser">Show</Link>
      <Link className="nav-link text-white" to="/addUser">Add User</Link>
      <Link className="nav-link text-white" to="/editUser"></Link>
      <a className="nav-link text-white" href="/login" onClick={logout}>Logout</a>
      </>:
      <>
      <Link className="nav-link text-white float-right" to="/login">Login</Link>
      
      </>
      }
      </Nav>
  </Navbar.Collapse>
  
</Navbar>
</>
        
    )
}
export default Navbr;