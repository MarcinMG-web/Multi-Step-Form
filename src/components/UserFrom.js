import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserFrom extends Component {

    state = {
        step: 1,
        firstName: '', // fidles start 
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''// fidles end
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.step;
        this.setState({
            step: step + 1
        });
    } 

    // Proceed to prev step
    prevStep = () => {
        const { step } = this.step;
        this.setState({
            step: step - 1
        });
    } 

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {

        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio }

        switch(step) {
            case 1:
                return(
                    <FormUserDetails 
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    // values = { value }
                    />
                )

                case 2:
                    return <h1>FormPersonalDetails</h1>;

                case 3:
                    return <h1>Confirm</h1>;
                    
                case 4:
                    return <h1>Succes</h1>;

        }
    }
}

export default UserFrom
