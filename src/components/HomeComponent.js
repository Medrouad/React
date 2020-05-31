import React from 'react';
import { Col, Card, CardTitle, CardText, CardSubtitle, CardImg, CardBody } from 'reactstrap';



function RenderCard({item}) {
    return(
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <Col sm="4">
                    <RenderCard item={props.dish} />
                </Col> 
                <Col sm="4">
                    <RenderCard item={props.promotion} />
                </Col>               
                <Col sm="4">
                    <RenderCard item={props.leader} />
                </Col>       
            </div>
        </div>
    );
}


export default Home;