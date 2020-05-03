import React from "react"
import {Card, CardImg, CardText, CardBody} from 'reactstrap';



    function RenderComment({comments}) {
          return (
            <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <h2 className="card-title">Comments</h2>
                                <ul>
                                    {comments.map(comment => {
                                        return (
                                            <li key={comment.id}>  
                                                <p>{comment.comment}</p>
                                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                            </li> 
                                    );
                                })}
                                </ul>             
                        </CardBody>
                    </Card>             
            </div> 
          )
    }

    function RenderDish({dish}) {                                                                          
        return ( 
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <h2 className="card-title">{dish.name}</h2>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>                   
        )
    }

    const DishDetail = (props) => {     
        if (props.dish != null) { 
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComment comments={props.dish.comments} />
                    </div>
                </div>  
            )              
        }
        else {
            return (<div></div>)
        }           
    }


export default DishDetail;
 