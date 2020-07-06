import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

        const { values: { firstName, lastName, dateOfBirth, adress, postalCode, email, telephone } } 
        = this.props;


        return (
            <MuiThemeProvider>
                
                <React.Fragment>
                    <AppBar title="Confirm:" style = { styles.appBar }></AppBar>
                    
                    <List>
                            <ListItem primaryText="First Name" 
                            secondaryText={firstName} 
                            style = { styles.listItem }/> 

                             <ListItem primaryText="Last Name" 
                            secondaryText={lastName} 
                            style = { styles.listItem }/> 

                             <ListItem primaryText="Date of Birth" 
                            secondaryText={dateOfBirth} 
                            style = { styles.listItem }/> 

                             <ListItem primaryText="Adress" 
                            secondaryText={adress} 
                            style = { styles.listItem }/> 

                            <ListItem primaryText="Postal Code" 
                            secondaryText={postalCode}
                            style = { styles.listItem } /> 

                            <ListItem primaryText="Email" 
                            secondaryText={email}
                            style = { styles.listItem } /> 

                            <ListItem primaryText="Telephone" 
                            secondaryText={telephone}
                             /> 

                    </List>

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
                    >Continue & Finish</Button>
                                      

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

    listItem:{
        marginTop:20,
    },
    
}
    


export default Confirm