import styled from "styled-components";
import {Link} from "react-router-dom";

const NavbarContainer = styled.div`
    height: 60px;
    width: 100vw;
    background-color: #273c75;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h2`
    color: #fff;
    font-size: 20px;
    padding: 8px;
`

const NavbarUl = styled.ul`
    overflow:hidden ;
    display: flex;

`

const NavbarLi = styled.li`
    float: right;
    list-style: none;
    margin: 30px 40px;
    flex-direction: row-reverse;
`

const Navbarlink = styled(Link)`
    padding: 3px 3px;
    text-decoration: none;
    color: #fff;

`

const Navbar = () =>{
    return(
    <NavbarContainer>
    <Logo>WebsiteTitle</Logo>
      <NavbarUl>
        <NavbarLi><Navbarlink to="/">Home</Navbarlink></NavbarLi>
        <NavbarLi><Navbarlink to="/about">About</Navbarlink></NavbarLi>
        <NavbarLi><Navbarlink to="/contact">Contact</Navbarlink></NavbarLi>
        <NavbarLi><Navbarlink to="/projects">Projects</Navbarlink></NavbarLi>
      </NavbarUl>
    </NavbarContainer>
    )
  }

export default Navbar