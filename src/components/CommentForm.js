import React, { Component } from "react";
import {Button,Modal, ModalHeader, ModalBody, Row, Label, Col} from 'reactstrap';
import { LocalForm, Control, Errors } from "react-redux-form";


class CommentForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isModalOpen : false
            }
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen : !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            console.log('Current State is : '+ JSON.stringify(values));
            alert('Current State is : '+ JSON.stringify(values));
        }

        render() {
            const maxLength = (len) => (val) => !(val) || (val.length <= len);
            const minLength = (len) => (val) => val && (val.length >= len);

            return(
                <div>
                    <Button outline onClick={this.toggleModal}>Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="rating">Rating</Label>                                   
                                        <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>                                                               
                                </div>
                                <div className="form-group">                                    
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name" placeholder="your Name" className="form-control"
                                            validators={{minLength: minLength(3), maxLength: maxLength(15) }} 
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="comment">Comment</Label>                                  
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" 
                                            className="form-control" />                                  
                                </div>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>  
                </div>
            )
        }


}


export default CommentForm;
