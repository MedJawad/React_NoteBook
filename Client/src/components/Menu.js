import React from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'

export default class Menu extends React.Component{
    render(){
        return (<div className="col-sm-3 bg-light menu">
            <ListGroup>
                <ListGroupItem>
                This
                </ListGroupItem>
                <ListGroupItem>
                Will
                </ListGroupItem>
                <ListGroupItem>
                Be
                </ListGroupItem>
                <ListGroupItem>
                A
                </ListGroupItem>
                <ListGroupItem>
                Menu
                </ListGroupItem>
            </ListGroup>
            {/* <ol>
                <li>This</li>
                <li>Is</li>
                <li>A</li>
                <li>User</li>
                <li>Menu</li>
            </ol> */}
            </div>)
    }
}