import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm';

import { Container } from './styles';
import { login } from '../../services/api';
import { history } from '../../services/history';

const Login: React.FC = () => {

    const [credentials, setCredentials] = useState({ email: '', password:'' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        setCredentials({
            ...credentials,
            [name]: value,
        });
        console.log(credentials)
    }

    const handleSubmit = () => {
        login(credentials)
            .then((response) => {
                const { data } = response
                if(data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
            .catch(() => {
                alert('Dados incorretos')
            })
    }

    return(
        <Container>
            <LoginForm 
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                credentials={credentials}
            />
        </Container>
    );
}

export default Login;