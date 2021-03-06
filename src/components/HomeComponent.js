import React from 'react';
import { Col, Card, CardTitle, CardText, CardSubtitle, CardImg, CardBody } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMsg}) {
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMsg) {
        return(
                <h4>{errMsg}</h4>
        );
    }
    else    
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <Col sm="4">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMsg={props.dishesErrMsg}/>
                </Col> 
                <Col sm="4">
                    <RenderCard item={props.promotion} isLoading={props.promosLoading} errMsg={props.promosErrMsg} />
                </Col>               
                <Col sm="4">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMsg={props.leadersErrMsg} />
                </Col>       
            </div>
        </div>
    );
}


export default Home;