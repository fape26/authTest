import React from 'react';
import { Redirect } from 'react-router';
import useSignUp from './hooks/useSignUp';
import validateValues from './validateValues';

const SignUp = () => {
    const {handleChange, values, handleSubmit, errors, isSubmitted} = useSignUp(validateValues, true);
    if(isSubmitted){
        return <Redirect to='/successForm'/>
    }
    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Please, create your account.</h1>
                <div className='form-inputs'>
                    <label htmlFor='login' className='form-label'>Username:</label>
                    <input type='text' name='login' id='login'
                        className='form-input' placeholder='Enter your username' 
                        value={values.login} onChange={handleChange}>
                    </input>
                    {errors.login && <p>{errors.login}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input type='email' name='email' id='email' 
                        className='form-input' placeholder='Enter your email'
                        value={values.email} onChange={handleChange}>
                    </input>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input type='password' name='password' id='password' 
                        className='form-input' placeholder='Enter your password'
                        value={values.password} onChange={handleChange}>
                    </input>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>Confirm Your Password:</label>
                    <input type='password' name='password2' id='password2' 
                        className='form-input' placeholder='Confirm your password'
                        value={values.password2} onChange={handleChange}>
                    </input>
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button type='submit' className='form-button'>
                    Sign up
                </button>
                <span className='form-login'>Already have an account? Login <a href="/">here</a></span>
            </form>
        </div>
    )
}

export default SignUp