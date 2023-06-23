import{ Nav, NavLink, Navbar,/* ,Nav,NavDropdown */ NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { ImHome2 } from "react-icons/im";

//<div  className="col-md-10 mx-auto">
const NavBarHome = () =>
{
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
      
      <NavbarBrand><ImHome2 /></NavbarBrand>
      <NavbarToggle aria-controls='responsive-navbar-nav' />
      <NavbarCollapse id='responsive-nabvar-nav'>
        <Nav className='me-auto'>
          <NavLink href='/user'>User</NavLink>
          <NavLink href='/activity'>Activity</NavLink>
        </Nav>
        <Nav>
          <NavLink href='/logIn'>Log in</NavLink>
          <NavLink href='/register'>Register</NavLink>
          <NavLink href='/account'>account</NavLink>
        </Nav>

      </NavbarCollapse>
   
    </Navbar>
  )
}

export default NavBarHome
