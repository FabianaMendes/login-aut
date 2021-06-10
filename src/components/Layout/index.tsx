import React from 'react';
import LoginForm from '../LoginForm';

import { Container } from './styles';

const Layout: React.FC = () => {
    return(
        <Container>
            <LoginForm />
        </Container>
    );
}

export default Layout;