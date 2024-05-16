import React from 'react';
import { Col, Container, Image, Card, Button, Row } from 'react-bootstrap';

const ItemPage = () => {
    const isAuth = false

    const item = {id: 1, name: 'Nike Air Jordan 1', price: 1000, rating: 5, img: 'https://krossteam.co/image/cache/catalog/sneakers/570/nike-air-jordan-1-black-white-1-1358x1502w.jpg.webp'}

    const description = [
        {id: 1, title: 'Материал', description: 'Кожа, резина'},
        {id: 2, title: 'Материал', description: 'Кожа, резина'},
        {id: 3, title: 'Материал', description: 'Кожа, резина'},
        {id: 4, title: 'Материал', description: 'Кожа, резина'},
        {id: 5, title: 'Материал', description: 'Кожа, резина'},
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={500} height={500} src={item.img}/>
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 400, height: 500, fontSize: 32, border: '2px solid'}}
                    >
                        <h3>Цена: {item.price} руб.</h3>
                        <Button variant={"outline-info"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Подробнее:</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;