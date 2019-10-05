import React from 'react'

class NewNote extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text : '',
        }
    }
    handleChange = (event) => {
        const {value} = event.target;
        this.setState({text:value});
    }
    render(){
        return (
            <div className="container">
                <form className="form-group" onSubmit= {(event)=>{event.preventDefault();this.props.onSave(this.state.text)}}>
                  <textarea className="form-control noteText" name="" value={this.state.text} onChange={this.handleChange} rows="3"></textarea>
                  {/* <a name="" id="" className="btn btn-primary" href="#" role="button">Save</a> */}
                  <button className="form-control btn btn-secondary col-sm-4" onClick={this.props.onCancel}>Cancel</button>
                  <button className="form-control btn btn-primary col-sm-4">Save</button>
                </form>
            </div>
        )
    }
}

export default NewNote