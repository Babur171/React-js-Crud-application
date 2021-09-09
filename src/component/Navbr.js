import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom';
function Navbr(){
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
      <Link className="nav-link text-white" to="/showUser">Show</Link>
      <Link className="nav-link text-white" to="/addUser">Add User</Link>
      <Link className="nav-link text-white" to="/editUser"></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
        
    )
}
export default Navbr;