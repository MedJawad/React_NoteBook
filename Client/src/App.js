import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Menu from './components/Menu'
import NoteList from './components/NoteList';
import Footer from './components/Footer';
import {PacmanLoader} from 'react-spinners';
import { css } from '@emotion/core';

import './App.css';
var uniqid = require('uniqid');

class App extends React.Component {


  state = {
    contentLoaded : false,
    notes : [{
      id : uniqid(),
      date : '20/08/2019',
      text : 'Here is this note content',
      isReadOnly : true,
  }],
  isAdding : false,
  }
  getDate = () => {
    let dd = new Date().getDate();
    let mm = new Date().getMonth()+1;
    let yyyy = new Date().getFullYear();
    let hh = new Date().getHours();
    let min =  new Date().getMinutes();
    if(dd<10){dd='0'+dd;}
    if(mm<10){mm='0'+mm;}
    if(hh<10){hh='0'+hh;}
    if(min<10){min='0'+min;}
    return dd+'/'+mm+'/'+yyyy+' - '+hh+':'+min;
}
addNote = (text) =>{
  const newNotes = this.state.notes.slice();
  const date =this.getDate();//(new Date().format('DD/MM/YYYY'));// toDateString());// getDay())+'/'+(new Date().getMonth())+'/'+(new Date().getFullYear());
  newNotes.push({
      id : uniqid(),
      date : date,
      text : text,
      isReadOnly : true,
  })
  this.setState({notes : newNotes,isAdding:false});
}
editNote = (id) =>{
  const newNotes = this.state.notes.map((note)=>{
      if(note.id === id){note.isReadOnly = !note.isReadOnly;}
      return note;
  })
  this.setState({notes : newNotes});

}
onNoteChange = (e) => {
  const {id , value} = e.target;
  const newNotes = this.state.notes.map((note)=>{
          if(note.id === id){note.text = value;}
          return note;
      })
      this.setState({notes : newNotes});
}
deleteNote = (id) =>{
  const newNotes = this.state.notes.filter((note) => note.id!==id);
  this.setState({notes:newNotes});
}

adding = () => {
  this.setState({isAdding:true});
}
canceling = (e) =>{
  e.preventDefault();
  this.setState({isAdding:false});
}


// componentDidMount(){
//   this.setState({notes : this.state.notes})
// }
  contentLoaded = () => {
    this.setState({contentLoaded : true,})
  }
  componentDidMount(){ 
    fetch("https://swapi.co/api/people/")
    .then(res => res.json())
    .then(data => data.results)
    .then(result => result.map(obj => 'Name : ' + obj.name+'\nHeight : '+obj.height+'\nMass : '+obj.mass))
    .then(info => info.map(person => {
       
        let newnotes = this.state.notes;
        newnotes.push({ 
            id : uniqid(),
            date : this.getDate(),
            text : person,
            isReadOnly : true
        }) ;
        this.setState({
            notes : newnotes,
        });
        this.contentLoaded();
        return null;
        })
    );
}
  render(){
        if (!this.state.contentLoaded) {
          const override = css`
              display: block;
              margin: 0 auto;
              margin-top : 100px;
              border-color: red;
          `;
          return (
            <React.Fragment>
              <PacmanLoader color="#000000" css={override} size="50" loading={!this.state.contentLoaded}/>
              <h1 style={{margin: "100px",textAlign: "center"}}>Please Wait while your content is Loading...</h1>
            </React.Fragment>
          )
        }
        return (
          <div className="App" style={{height : "100%"}} >
            <Navbar />     {/*style={{position : "fixed" , zIndex : "100"}} */}
            
            <div className="main" style={{height : "100%"}}>
            <Menu style={{position : "fixed",zIndex : "100"}}/>
            <NoteList notes={this.state.notes} 
                      isAdding={this.state.isAdding}
                      getDate={this.getDate}
                      adding={this.adding}
                      canceling={this.canceling}
                      addNote={this.addNote}
                      editNote={this.editNote}
                      deleteNote={this.deleteNote}
                      onNoteChange={this.onNoteChange}

                      />
            </div>
            
            <Footer />
          </div>
        );
}
}

export default App;
