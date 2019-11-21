import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props)
        this.arr = [<option key={0}>{'Select'}</option>]
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
            this.arr.push(<option key={i+1}>{i}</option>)
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
        this.props.handleNewDog(this.state.form)
    }

    render() {
        return (
            <div>

                <div className="form-group">
                  <label className="col-form-label">Dog Name:</label>
                  <input type="text" className="form-control" placeholder="Dog Name" id="name" name="name" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                 <label>Age:</label>
                 <select className="form-control" id="age" name="age" onChange= {this.handleChange} >
                    {this.arr}
                </select>
               </div>

                <div className="form-group">
                    <label>Enjoys:</label>
                    <textarea className="form-control" placeholder="What Does the Dog Enjoy? Favorite Foods... Favorite Toys... etc" id="Description" rows="3" name="enjoys" onChange= {this.handleChange} >
                    </textarea>

                </div>

                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>

                	{this.props.success &&
            		<Redirect to="/dogs/" />
                }
            </div>
        );
    }
}

export default Form;
