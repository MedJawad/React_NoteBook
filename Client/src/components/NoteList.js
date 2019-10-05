import React from 'react';
import Notes from './Notes';
import NewNote from './NewNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faFilter , faSort } from '@fortawesome/free-solid-svg-icons';

// var uniqid = require('uniqid');

class NoteList extends React.Component{

    render(){

        return (
            <React.Fragment>            
            <div  className="col-sm-8 notelist">
            {/* <h2>Here will be a bar with Options like : Add, sort, filter Notes</h2> */}
            <button className="btn" onClick={this.props.adding}>
               <span className="badge badge-primary"><FontAwesomeIcon icon={faPlus} />  Add Note</span>
            </button>
            <button className="btn" onClick={()=> null}>
               <span className="badge badge-warning"><FontAwesomeIcon icon={faFilter} />  Filter</span>
            </button>
            <button className="btn" onClick={()=> null}>
               <span className="badge badge-success"><FontAwesomeIcon icon={faSort} />  Sort</span>
            </button>
            {this.props.isAdding && <NewNote onCancel={this.props.canceling} onSave={this.props.addNote}/>}
            <Notes  notes={this.props.notes} 
                    editNote={this.props.editNote} 
                    deleteNote={this.props.deleteNote}
                    onNoteChange={this.props.onNoteChange} />
            </div>
             </React.Fragment>
        )
    }

}

export default NoteList