import React,{ Component } from "react"
import {Card, CardImg, CardText, CardBody} from 'reactstrap';



class DishDetail extends Component {

    componentDidMount() {
        console.log('DishDetail componenetDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('DishDetail componentDidUpdate is invoked');
    }

    renderComment(comments) {
          return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardBody>
                        <h2 className="card-title">Comments</h2>
                            <ul>
                                {this.props.dish.comments.map(comment => {
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

    renderDish(dish) {                                                                          
            return ( 
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <h2 className="card-title">{this.props.dish.name}</h2>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>                   
            )
    }

    render() {
        console.log('DishDetail render is invoked');    
        if(this.props.dish != null) {
             return (
                <div className="container">
                <div className="row">
                     {this.renderDish(this.props.dish)}
                     {this.renderComment(this.props.dish.comments)}
                </div>
            </div>
            )
        }
         else {
             return (<div></div>)
         }
    }

}

export default DishDetail;
 