import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';


export default function NavBar () {
    return (
        <>
         <Navbar>
      <NavbarBrand>
        <p className="font-bold ">FUNANGA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
            <Button className="jellyButton"  as={Link}  to="/login" variant="flat">
              Log In
            </Button>
          </NavbarItem>
      </NavbarContent>
    </Navbar>
        </>
    )
}