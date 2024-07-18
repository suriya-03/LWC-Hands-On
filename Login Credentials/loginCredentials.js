import { LightningElement } from 'lwc';

export default class LoginCredentialsConditionalRendering extends LightningElement {

    'use strict';

    login = 'suriya@gmail.com';
    password = 'suriya123';
   

    //for Register

    toLoginName = null;
    toRegisterEmail = null;


    //for login
    loginUserName;
    loginPassword;


    isMemberLogin = false;
    isNewMemberSignIn = false;

    handleChangeMemberLogin(event)
    {
        this.isMemberLogin = event.target.checked;
        this.isNewMemberSignIn = false;
        this.template.querySelector(".newMemberChecked").checked = false;
    }

    handleChangeNewMember(event)
    {
        this.isNewMemberSignIn = event.target.checked;
        this.isMemberLogin = false;
        this.template.querySelector(".memberChecked").checked = false;
    }

    //If Select Member Login --> 

    handleChangeLogin(event) //Login input username
    {
        this.loginUserName = event.target.value;
    }

    handleChangepassword(event) //Login input password
    {
        this.loginPassword = event.target.value;
    }

    handleClickLogin() //on click button for login
    {
        if((this.login === this.loginUserName) && (this.password === this.loginPassword))
        {
            alert `Login Successfully`;
        }

        else if ((this.login != this.loginUserName) && (this.password === this.loginPassword))
        {
            alert `Invalid Username`;
        }

        else if ((this.login === this.loginUserName) && (this.password != this.loginPassword))
        {
            alert `Invalid password`;
        }

        else
        {
            alert `Invalid Username and password`;
        }
    }

    //If Select New Member Register --> 

   

    handleChangeEmailName(event) //Login input username
    {
        this.toLoginName = event.target.value;
    }


    handleChangeEmail(event) //Login input username
    {
        this.toRegisterEmail = event.target.value;
    }

  
    handleClickRegister()  

    {
        if((this.toLoginName === null || this.toRegisterEmail === null)) 
            {
                alert `Enter the Name or Email`;
            }

        else if (this.toLoginName.trim() === '' || this.toRegisterEmail.trim() === '')
            {

                alert `Enter a Eamil or  Name`;  
            }

        else
            {   
                alert `Registered Successfully`;
            }
    }

}