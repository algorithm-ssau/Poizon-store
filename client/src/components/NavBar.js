import React, { useContext } from 'react';
import { Context } from '..';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>POIZON STORE</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant="outline-light" className="m-1">Админ панель</Button>
                            <Button variant="outline-light" className="m-1">Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} className="m-1" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                    </Container>
            </Navbar>
        </div>
    );
});

export default NavBar;