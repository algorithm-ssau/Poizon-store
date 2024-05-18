import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Col, Card } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {item} = useContext(Context)

    return (
        <Col className="d-flex">
            {item.brands.map(brand => 
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3 mx-2"
                    onClick={() => item.setSelectedBrand(brand)}
                    border={brand.id === item.selectedBrand.id ? 'info' : 'dark'}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    );
});

export default BrandBar;