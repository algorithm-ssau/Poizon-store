import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateItem from '../components/modals/CreateItem';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
    // const isAuth = false

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button variant='outline-dark' className='mt-3' onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button variant='outline-dark' className='mt-3' onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant='outline-dark' className='mt-3' onClick={() => setItemVisible(true)}>Добавить вещь</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;