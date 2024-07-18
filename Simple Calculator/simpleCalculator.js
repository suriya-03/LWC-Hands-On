/*
  @description       : Simple Calaculator Day 8 Case Study 2 English Video
  @author            : Suriya.
  @group             : 
  @last modified on  : 02-20-2024
  @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
  */


import { LightningElement } from 'lwc';

export default class SimpleCalculator_Day8_CS2 extends LightningElement 
{

    'use strict';
    a = null;
    b = null; 
    
    result;

    handleChangeInput1(event)
    {
        this.a = event.target.value; // value received as string
        
    }

    handleChangeInput2(event)
    {
        this.b = event.target.value; // value received as string
        
    }

  addition()
    {
        if((this.a != null && this.b != null))

        

            {
                /*Note :    1. convert string to integer use parseInt() funtion 
                            2.Use NaN(this.a) funtion to check the Not a  Number . it returs boolean     */  

                if(!isNaN(parseInt(this.a)) && !isNaN(parseInt(this.b)))
                {
                    this.result =  parseInt(this.a) + parseInt(this.b);

                    console.log(`a ${parseInt(this.a)}`); 
                    console.log(`b ${parseInt(this.b)}`);
                    console.log(`result ${this.result}`);
                    console.log(`a ${typeof parseInt(this.a)}`); 
                    console.log(`b ${typeof parseInt(this.b)}`);
                    console.log(`result ${typeof this.result}`);

                    //Check NAN

                    console.log('Check NAN');

                    console.log(`a true ${isNaN(parseInt(this.a))}`); 
                    console.log(`b true ${isNaN(parseInt(this.b))}`);
                    console.log(`result true ${isNaN(this.result)}`);
                }

                else
                {
                    alert `Enter the Input #1 and Input #2 value`;
                }

            }

        else
            {   
                alert `Enter the Input #1 and Input #2 value`;
            }
    }

    subraction()
    {
        if(this.a != null && this.b != null)
            {
                if(!isNaN(parseInt(this.a)) && !isNaN(parseInt(this.b)))
                {
                    this.result =  parseInt(this.a) - parseInt(this.b);
                    console.log(`a ${typeof parseInt(this.a)}`); 
                    console.log(`b ${typeof parseInt(this.b)}`);
                    console.log(`result ${typeof this.result}`);
                }

                else
                {   
                    alert `Enter the Input #1 and Input #2 value`;
                }
                    
            }

        else
            {  

                alert `Enter the Input #1 and Input #2 value`;
            
            }
    }

    multiplication()
    {
        if(this.a!=null && this.b!= null)
            {
                if(!isNaN(parseInt(this.a)) && !isNaN(parseInt(this.b)))
                {
                    this.result =  parseInt(this.a) * parseInt(this.b);
                    console.log(`a ${typeof parseInt(this.a)}`); 
                    console.log(`b ${typeof parseInt(this.b)}`);
                    console.log(`result ${typeof this.result}`);
                 }

            else
                {  
    
                    alert `Enter the Input #1 and Input #2 value`;
                
                }
            }

        else
            {   
                
                alert `Enter the Input #1 and Input #2 value`;
            }
    }

    division()
    {
        if(this.a != null && this.b != null )
            {
                if(!isNaN(parseInt(this.a)) && !isNaN(parseInt(this.b)))
                {
                    if(this.b != 0)
                    {
                        this.result =  (parseInt(this.a) / parseInt(this.b));
                        console.log(`a ${typeof parseInt(this.a)}`); 
                        console.log(`b ${typeof parseInt(this.b)}`);
                        console.log(`result ${typeof this.result}`);
                  
                    }

                    else 
                
                    {
                        
                        alert `Input #2 value can not be 0. Enter valid number`;
                    }
                }
                
                else
                {   
                    alert `Enter the Input #1 and Input #2 value`;
                }
                
            }

        else
            {   
                alert `Enter the Input #1 and Input #2 value`;
            }

    }

    clear()
    {
        
        this.template.querySelector(".input1").value = null;
        this.a = null;
        this.template.querySelector(".input2").value = null;
        this.b = null;
        this.result =null;   
    }

}