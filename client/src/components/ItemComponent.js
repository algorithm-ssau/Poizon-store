import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import {useNavigate} from 'react-router-dom';
import { ITEM_ROUTE } from '../utils/consts';

const ItemComponent = ({item}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mt-3' onClick={() => navigate(ITEM_ROUTE+ '/' + item.id)}>
            <Card style={{width: 200, cursor: 'pointer'}} border={"light"}>
                <Image width={199} height={199} src={process.env.REACT_APP_API_URL + item.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Nike</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <Image className="m-1" width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default ItemComponent;