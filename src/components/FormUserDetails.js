import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';


export class FormUserDetails extends Component {
 

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    

    render(){  
               

        const { values, handleChange } = this.props;
        
        return (
           
            <MuiThemeProvider>
                
                <React.Fragment>
                    <AppBar title="Enter User Details:" style = { styles.appBar }>
                    </AppBar>
                    
                   
                    <TextField
                    id="1"
                    label="First Name"
                    hintText = "Enter Your First Name"
                    floatingLabelText = "First Name"
                    onChange = { handleChange('firstName') }
                    defaultValue = { values.firstName } 
                    style = { styles.imput }
                    />    
                    <br/>

                    <TextField 
                    id="2"
                    label="Last Name"
                    hintText = "Enter Your Last Name"
                    floatingLabelText = "Last Name"
                    onChange = { handleChange('lastName') }
                    defaultValue = { values.lastName } 
                    style = { styles.imput }
                    />    
                    <br/>

                    <TextField 
                    id="3"
                    label="Date Of Birth"
                    hintText = "Enter Your Date Of Birth"
                    floatingLabelText = "Date Of Birth"
                    onChange = { handleChange('dateOfBirth') }
                    defaultValue = { values.dateOfBirth } 
                    style = { styles.imput }
                    />    
                    <br/>

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
    imput:{
        marginTop:20,
    },
    
}

    


export default FormUserDetails
