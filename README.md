# How to use this package
First install by npm i sanjay-reuable-components-demo command

## Post successful install

import the components that you require. 

available components are input and single select drop down

##input

input: accepts props such as type, value, place holder and a validator. 

###input validations
1. input type "text" validations:
   * Mark as required field (Validators.required)
   * Accept a custom length (Validators.number)
2. input type "email" validations:
   * Email ID syntax validation
   * Mark as required field (Validators.required)
   * Accept a custom length (Validators.number)

##DropDown

DropDown: this component is a single select dropdown which accepts props such as value, data (array of objects containing value label pairs), placeholder and a style class

example: 
import { InputField, DropDown } from 'sanjay-reuable-components-demo'
import { Validators } from 'sanjay-reuable-components-demo/src/components/Requirement/Validator'

    <InputField
                    value={text}
                    type='text'
                    placeholder='Enter text here...'
                    validators={[
                      {check: Validators.required, message: 'This field is required'}
                  ]}
                    onChange={handleChange}/>

    <InputField
                    value={email}
                    type='email'
                    placeholder='Enter text here...'
                    validators={[
                        {check: Validators.required, message: 'This field is required'},
                        {check: Validators.email, message: 'enter valid e-mail'}
                    ]}
                    onChange={handleChangeEmail}/>  
                
    <Dropdown
                    data={[
                        {value: 1, label: 'India'},
                        {value: 2, label: 'USA'},
                        {value: 3, label: 'UK'},
                        {value: 4, label: 'Germany'},
                        {value: 5, label: 'Russia'},
                        {value: 5, label: 'Italy'},
                    ]}
                    styleClass='mt-3'
                    value={country}
                    placeholder='Select Country'
                    onChange={handleDropdown}
                />

                            
