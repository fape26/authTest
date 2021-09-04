import React from 'react';
import { Redirect } from 'react-router';
import useSignIn from './hooks/useSignIn';
import validateValues from './validateValues';

const SignIn = () => {
    const {handleChange, values, handleSubmit, errors, isSubmitted} = useSignIn(validateValues);
    if(isSubmitted){
        return <Redirect to='/authSuccess'/>
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className='form-inputs'>
                <label htmlFor='login' className='form-label'>Username:</label>
                <input type='text' name='login' id='login'
                    className='form-input' placeholder='Enter your username' 
                    value={values.login} onChange={handleChange}>
                </input>
                {errors.login && <p>{errors.login}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input type='password' name='password' id='password' 
                    className='form-input' placeholder='Enter your password'
                    value={values.password} onChange={handleChange}>
                </input>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type='submit' className='form-button'>
                Sign In
            </button>
            <span className='form-login'>Do not have an account? Sign up <a href="/signUp">here</a></span>
        </form>
    )
}

export default SignIn