import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {item} = useContext(Context)
    return (
        <ListGroup>
            {item.types.map(type =>
                <ListGroup.Item
                    variant="light"
                    style={{cursor: 'pointer'}}
                    active={type.id === item.selectedType.id}
                    onClick={() => item.setSelectedType(type)}
                    // border={item.id === item.selectedBrand.id ? 'info' : 'light'}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;