import{ Container, Image, Nav, NavLink, Navbar,/* ,Nav,NavDropdown */ NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import InputNav from './InputNav'
//<div  className="col-md-10 mx-auto">
const NavBarHome = () =>
{//https://res.cloudinary.com/deqbqghhq/image/upload/v1687785603/classcenterlogo_waymt1.png
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
        <Container  className="col-md-10 mx-auto ">
      <NavbarBrand >
        <NavLink href='/'>
        <Image src='https://res.cloudinary.com/deqbqghhq/image/upload/v1687785603/classcenterlogo_waymt1.png'rounded width={150} height={30} />
        </NavLink>
      </NavbarBrand>
      <Container className='col-md-3'>
      <InputNav />
      </Container>
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
      </Container>
    </Navbar>
  )
}

export default NavBarHome
