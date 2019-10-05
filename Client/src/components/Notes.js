import React from 'react'
import Note from './Note'

class Notes extends React.Component{


    render(){
        return (
            this.props.notes.map((note) => (<Note   key={note.id} 
                                                    id={note.id} 
                                                    date={note.date} 
                                                    text={note.text} 
                                                    isReadOnly={note.isReadOnly}
                                                    editNote={this.props.editNote}  
                                                    deleteNote={this.props.deleteNote}
                                                    onChange={this.props.onNoteChange}
                                            />
                            ))
        ) 
    }
}
export default Notes
