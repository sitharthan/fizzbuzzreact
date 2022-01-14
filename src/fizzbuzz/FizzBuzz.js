import React, { Component } from 'react';
import logo from '../logo.svg';
import './FizzBuzz.css';
import FizzBuzzNew from './FizzBuzzNew';
class FizzBuzz extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            fizzBuzz: '',
            formSubmit: false,
        }
    }

    render() {
        const numberStyle = {
            fontSize: '64px',
        };

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Terms:
                        <input type="number" name = "terms" value={this.state.terms || ''} onChange={this.handleInputChange.bind(this)}/>        
                    </label>
                    <label>
                        Divisor1:
                        <input type="number" name = "divisor1" value={this.state.divisor1 || ''} onChange={this.handleInputChange.bind(this)}/>        
                    </label>
                    <label>
                        Divisor2:
                        <input type="number" name = "divisor2" value={this.state.divisor2 || ''} onChange={this.handleInputChange.bind(this)}/>        
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {/* <div className="col-sm-12 text-center">
                    <h2
                        style={numberStyle}>
                        {this.state.fizzBuzz || this.state.count}
                    </h2>
                </div> */}
                {this.state.formSubmit && (
                    <div>
                    <p>Sitharthan</p>
                    <FizzBuzzNew length={this.state.terms} div1={this.state.divisor1} div2={this.state.divisor2} ></FizzBuzzNew>
                    </div>
                )}
            </div>
        );
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'number' ? target.value : '';
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            formSubmit : true
        });

    }
}
export default FizzBuzz;