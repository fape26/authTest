import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthSuccess from './AuthSuccess'
import SuccessForm from './SuccessForm';
import Form from './Form';
import SignUp from './SignUp';

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Form></Form>
            </Route>
            <Route path="/signUp" exact>
                <SignUp></SignUp>
            </Route>
            <Route path="/authSuccess" exact>
                    <AuthSuccess></AuthSuccess>
            </Route>
            <Route path="/successForm" exact>
                    <SuccessForm></SuccessForm>
            </Route>
            <Redirect to={"/"}></Redirect>
        </Switch>
    )
}