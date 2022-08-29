import React, { Component } from "react";    
import './LoginForm.css'    
import { Container, Row, Col } from "react-bootstrap";

    
class LoginForm extends Component {  
    
    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',   
            passwordId: '',  
            disabled: true, 
             
            phoneNumber: '',    
               
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, emailId, phoneNumber, passwordId} = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
        //password   
        if (!passwordId) {    
            formIsValid = false;    
            formErrors["passwordErr"] = "Password id is required.";    
        }  
         
        else {    
            const re = new RegExp(`.{8,}`);   
            if (!re.test(passwordId)) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "At least minumum 8 characters.";    
            }    
            const sc = new RegExp(`(?=.*?[#?!@$%^&*-])`);   
            if (!sc.test(passwordId)) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "At least one Special Characters.";    
            } 
            const up = new RegExp(`(?=.*?[A-Z])`);   
            if (!up.test(passwordId)) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "At least one Uppercase.";    
            } 
            const lc = new RegExp(`(?=.*?[a-z])`);   
            if (!lc.test(passwordId)) {    
                formIsValid = false;    
                formErrors["passwordErr"] = "At least one Lowercase.";    
            }  
            
        } 
       
        
    
        
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value }); 
        if(e.target.value.length>=2){
            this.setState({
                disabled: false
            });
        }
        else{
            this.setState({
                disabled: true
            })
        }   
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, emailIdErr, phoneNumberErr, passwordErr} = this.state.formErrors;    
    
        return (  
            <div>  
            <Container>
            <Row>
              <Col xs={12} md={12}>
                <div className="login">
                <h4 >Admin User</ h4>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                        <span className="add-on"><i class="fa-solid fa-user"></i></span>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 , fontSize: "13px" ,
    fontWeight: "600" }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                        <span className="add-on"><i class="fa-solid fa-user"></i></span>   
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 , fontSize: "13px" ,
    fontWeight: "600"  }}>{emailIdErr}</div>    
                            }    
    
                        </div>  
                        <div>    
                        <span className="add-on"><i class="fa-solid fa-key"></i></span>   
                            <input type="password" name="passwordId"    
                                value={this.state.passwordId}    
                                onChange={this.handleChange}    
                                placeholder="Your Password.."    
                                className={passwordErr ? ' showError' : ''} />    
                            {passwordErr &&    
                                <div style={{ color: "red", paddingBottom: 10 , fontSize: "13px" ,
    fontWeight: "600"}}>{passwordErr}</div>    
                            }    
    
                        </div>   
                        <div>    
                        <span className="add-on"><i class="fa-solid fa-phone"></i></span>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 , fontSize: "13px" ,
    fontWeight: "600"  }}>{phoneNumberErr}</div>    
                            }    
                        </div>     
                        <input  className="btn" disabled={this.state.disabled}   type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >
            </Col>
            </Row>
          </Container>  
          </div>  
        )    
    }    
}  
export default LoginForm;  
    