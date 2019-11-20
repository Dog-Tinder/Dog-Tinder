import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../Form'


class NewDog extends Component {

    render() {
        return (
            <div>
            <h1>Enter Dog's Info</h1>
                <Form addAnimal= {this.props.addAnimal}/>
            </div>
        );
    }
}

export default NewDog;
