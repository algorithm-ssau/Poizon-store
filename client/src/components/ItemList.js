import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import ItemComponent from './ItemComponent';

const ItemList = observer(() => {
    const {item} = useContext(Context)
    return (
        <Row>
            {item.items.map(item => 
                <ItemComponent key={item.id} item={item}/>
            )}
        </Row>
    );
});

export default ItemList;