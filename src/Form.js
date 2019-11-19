import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props)
        this.arr = []
        this.createArr()
        this.state = {
            form: {
                name: '',
                age: '',
                enjoys: ''
        }
        }
    }

    createArr = () => {
        for(let i = 0; i <=20; i++){
            this.arr.push(<option>{i}</option>)
        }
    }
// this handleclick  update the state of the form. Then push information into the dogs state array
// eventually being able to display on Dog Community

    handleSubmit = (e) => {
        const {form} = this.state;
    }

    addAnimal

    render() {
        return (
            <div>
            <form>
            <div class="form-group">
              <label class="col-form-label" for="inputDefault">Dog Name:</label>
              <input type="text" class="form-control" placeholder="Dog Name" id="name" />
            </div>

            <div class="form-group">
             <label for="exampleSelect1">Age:</label>
             <select class="form-control" id="exampleSelect1">
                {this.arr}
            </select>
           </div>

            <div class="form-group">
                <label for="Enjoys">Enjoys:</label>
                <textarea class="form-control" placeholder="What Does the Dog Enjoy? Favorite Foods... Favorite Toys... etc" id="Description" rows="3"></textarea>
            </div>

            <div class="form-group">
            <label for="exampleInputFile">Upload Photo:</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" class="form-text text-muted">Upload a photo of the dog</small>
            </div>

            <button onClick={this.handleSubmit} type="submit" class="btn btn-primary">Submit</button>

            </form>




            </div>
        );
    }
}

export default Form;
