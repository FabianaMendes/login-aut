import React from 'react';

import { 
    Container, 
    FormTitle,
    LockImg,
    Span 
} from './styles';

import lock from '../../assets/lock.svg';

const LoginForm: React.FC = () => {
    return(
        <Container>
            <FormTitle><LockImg src={lock} alt="lock.img"/>Logg</FormTitle>
                <form action="" method="" id="login">
                    <fieldset form="login">
                        <legend>Please <b>Login</b> or <b>Register</b></legend>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password"/>

                        <button type="submit" form="login">LOGIN</button>
                    </fieldset>
                </form>
            <Span>Don't have an account? <a href="#">Register now</a></Span>
        </Container>
    );
}

export default LoginForm;