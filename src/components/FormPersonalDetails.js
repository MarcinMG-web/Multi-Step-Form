import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';


export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { values, handleChange } = this.props;


        return (
            <MuiThemeProvider>
                
                <React.Fragment>
                    <AppBar title="Enter User Personal Details:" 
                    style = { styles.appBar }></AppBar>
                   
                    <TextField
                    id="4"
                    label="Adress"
                    hintText = "Enter Your Adress"
                    floatingLabelText = "Adress"
                    onChange = { handleChange('adress') }
                    defaultValue = { values.adress } 
                    style = { styles.imput }
                    />    
                    <br/>
                    
                    <TextField
                    id="5"
                    label="Postal Code"
                    hintText = "Enter Your Postal Code"
                    floatingLabelText = "Postal Code"
                    onChange = { handleChange('postalCode') }
                    defaultValue = { values.postalCode } 
                    style = { styles.imput }
                    />    
                    <br/>
                    
                    <TextField
                    id="6"
                    label="Email"
                    hintText = "Enter Your Email"
                    floatingLabelText = "Email"
                    onChange = { handleChange('email') }
                    defaultValue = { values.email } 
                    style = { styles.imput }
                    />    
                    <br/>
                                      
                    <TextField
                    id="7"
                    label="Telephone"
                    hintText = "Enter Your Telephone"
                    floatingLabelText = "Telephone"
                    onChange = { handleChange('telephone') }
                    defaultValue = { values.telephone } 
                    style = { styles.imput }
                    />   
                    <br/>
                                        
                    <Button
                    style = { styles.buttonBack }
                    variant="contained"
                    size='large'
                    onClick = { this.back }
                    >Back</Button>

                    <Button
                    style = { styles.button }
                    variant="contained"
                    size='large'
                    onClick={this.continue}
                    >Continue</Button>

                    

                </React.Fragment>
              
            </MuiThemeProvider>
        )
    }
}

const styles= {
    appBar:{
        backgroundColor:'#FF6200',
    },
    button:{
        marginTop:30,
        color: '#fff',
        backgroundColor:'#FF6200',
    },
    buttonBack:{
        marginTop:30,
        color: '#fff',
        backgroundColor:'#bac2cc',
        marginRight: 5,
    },

    imput:{
        marginTop:20,
    },
    
}
    


export default FormPersonalDetails