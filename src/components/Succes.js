import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Succes extends Component {

     

    render(){

         return (
            <MuiThemeProvider>
                
                <React.Fragment>
                    <AppBar title="Succes!" style = { styles.appBar }></AppBar>

                    <h1>Thank you for Submission</h1>
                    <p>You will get an email with further instructions</p>
                 

                </React.Fragment>
              
            </MuiThemeProvider>
        )
    }
}

const styles= {
    appBar:{
        backgroundColor:'#FF6200',
    },
   
}



export default Succes