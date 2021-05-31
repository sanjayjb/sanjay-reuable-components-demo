import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import {InputField, Dropdown} from '../components/Requirements';
import {Validators} from "../components/Requirement/Validator";

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [text, setText] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (value) => {
    setText(value);
  }

  const handleChangeEmail = (value) => {
    setEmail(value);
  }

  const handleDropdown = (value) => {
    setCountry(value);
  }

  return (
    <div className='form'>
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

    </div>
  );
});
