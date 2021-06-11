import React from 'react';
import { 
    Container, 
    FormTitle,
    LockImg,
    Span 
} from './styles';
import lock from '../../assets/lock.svg';


type Props = {
    credentials: { email: string, password: string };
    onSubmit: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginForm({ onSubmit, onChange, credentials}: Props) {

    return(
        <Container>
            <FormTitle><LockImg src={lock} alt="lock.img"/>Logg</FormTitle>
                <form id="login" onSubmit={onSubmit}>
                    <fieldset>
                        <legend>Please <b>Login</b> or <b>Register</b></legend>

                        <label htmlFor="email">Email</label>
                        <input 
                            required
                            type="email" 
                            id="email" 
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                        />

                        <label htmlFor="password">Password</label>
                        <input 
                            required
                            type="password" 
                            id="password" 
                            name="password"
                            onChange={onChange}
                            value={credentials.password}
                        />

                        <button 
                            type="submit" 
                            >LOGIN
                        </button>
                    </fieldset>
                </form>
            <Span>Don't have an account? <a href="#">Register now</a></Span>
        </Container>
    );
}
