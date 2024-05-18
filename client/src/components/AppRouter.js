import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from '../pages/Shop';
import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import ItemPage from '../pages/ItemPage';
import Admin from '../pages/Admin';
import { Context } from '..';
import NavBar from './NavBar';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/login' element={<Auth/>}/>
                <Route path='/registration' element={<Auth/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/itemPage/:id' element={<ItemPage/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;