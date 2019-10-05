import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye , faPencilAlt , faTrash} from '@fortawesome/free-solid-svg-icons'
import {Modal , ModalHeader , ModalBody , ModalFooter , Button } from 'reactstrap'

 class Note extends React.Component{

    state = {
        modal : false,
    }
    toggleModal = prevState => {
        this.setState({
            modal : !prevState.modal
        })
    }

    render(){
        return (
            <React.Fragment>
            <Modal isOpen={this.state.modal} toggle={() => this.toggleModal(this.state)}>
          <ModalHeader toggle={() => this.toggleModal(this.state)}></ModalHeader>
          <ModalBody>
          <textarea className="noteText" id={this.props.id} value={this.props.text} onChange={this.props.onChange} readOnly={this.props.isReadOnly}></textarea>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>this.props.editNote(this.props.id)}>{this.props.isReadOnly ? "Edit" : "Save"}</Button>{' '}
            <Button color="secondary" onClick={() => this.toggleModal(this.state)}>Cancel</Button>
          </ModalFooter>
        </Modal>
            <div className="container alert alert-warning">
                <div className="btn-toolbar">
                <button className="btn btn-info ml-auto" onClick={this.toggleModal}><FontAwesomeIcon icon={faEye} />Read</button>
                    <button className="btn btn-info" onClick={()=>{this.toggleModal(this.state);this.props.editNote(this.props.id)}}><FontAwesomeIcon icon={faPencilAlt} /> Edit</button>
                    <button className="btn btn-danger" onClick={()=>this.props.deleteNote(this.props.id)}><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </div>
                <div className="content">
                    <span className="note-date">{this.props.date}</span>
                    <textarea className="noteText" value={this.props.text} readOnly ></textarea>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Note
