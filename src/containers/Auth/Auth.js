import React, { Component } from "react";
import axios from "axios";
import { Button } from 'antd';
import classes from './Auth.module.css';
import Input from '../../components/Input/Input';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Mail Adress",
        },
        value: "",
      },
      password: {
        elementtype: "input",
        elementconfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
      },
    },
  };

  createOnAuth = (email, password) => {
    let unik = Math.random();
    return {
      id: unik,
      email: email,
      password: password
    };
  };
 
  submitHandler = (event) => {
    event.preventDefault();
    const onAuth = this.createOnAuth(this.state.controls.email.value, this.state.controls.password.value)
    axios
    .post(
      "https://happyorganizer-38749-default-rtdb.firebaseio.com/auth.json",
      onAuth
    )
    .then((response) => {
      console.log(response)
     
      this.setState({controls: {
        email: {
          elementtype: "input",
          elementconfig: {
            type: "email",
            placeholder: "Mail Adress",
          },
          value: "",
        },
        password: {
          elementtype: "input",
          elementconfig: {
            type: "password",
            placeholder: "Password",
          },
          value: "",
        },
      },})
      
    });
};
    
    
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value
            }
           
        };
        this.setState({ controls: updatedControls})
      
    }

     const form = formElementsArray.map((formElement) => (
      <Input
      label="text"
         key={formElement.id}
         type="text"
         elementtype={formElement.config.elementtype}
         elementconfig={formElement.config.elementconfig}
         value={formElement.config.value}
         onChange={(event) => inputChangedHandler(event, formElement.id)}
       />
     ));
    return (
      <div className={classes.Auth}>
        <form className={classes.Form} onSubmit={this.submitHandler}>
            { form }
            <Button className={classes.Button} htmlType="submit" type="primary">SUBMIT</Button>
        </form>
      </div>
    )};
    }


export default Auth;
