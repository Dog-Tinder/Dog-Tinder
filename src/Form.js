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

    handleChange = (e) => {
        const {form} = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = () => {
        this.props.addAnimal(this.state.form)
    }

    render() {
        return (
            <div>

            <div class="form-group">
              <label class="col-form-label" for="inputDefault">Dog Name:</label>
              <input type="text" class="form-control" placeholder="Dog Name" id="name" name="name" onChange= {this.handleChange}/>
            </div>

            <div class="form-group">
             <label for="age">Age:</label>
             <select class="form-control" id="age" name="age" onChange= {this.handleChange} >
                {this.arr}
            </select>
           </div>

            <div class="form-group">
                <label for="Enjoys">Enjoys:</label>
                <textarea class="form-control" placeholder="What Does the Dog Enjoy? Favorite Foods... Favorite Toys... etc" id="Description" rows="3" name="enjoys" onChange= {this.handleChange} >
                </textarea>

            </div>

            <button onClick={this.handleSubmit} class="btn btn-primary">Submit</button>

            </div>
        );
    }
}

export default Form;
