import React, {Component} from 'react';
import Form from '../Form'


class NewDog extends Component {

    render() {
        return (
            <div>
            <h1>Enter Dog's Info</h1>
                <Form handleNewDog= {this.props.handleNewDog}/>
            </div>
        );
    }
}

export default NewDog;
