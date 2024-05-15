import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';

const Shop = () => {
    const isAuth = false
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                    
                </Col>
                <Col md={2}>
                    <BrandBar/>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Shop;