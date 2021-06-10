import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(10, 10, 10, 0.8);

    padding: 20px 40px;
    width: 40vw;
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    form {
        color: #fff;
        width: 100%;
    }
    fieldset {
        display: flex;
        flex-direction: column;  
    }
    legend {
        margin-bottom: 10px;
        text-align: center;
    }
    input {
        border-radius: 5px;
        padding: 12px;
        margin-bottom: 10px;
    }
    button {
        background: #406080;
        color: #fff;
        border-radius: 5px;
        font-size: 16px;

        padding: 12px;
        margin: 12px 0;
        align-self: center;

        width: 100%;

        &:hover {
            filter: brightness(1.2);
        }
    }
`;

export const FormTitle = styled.h1`
    color: #fff;

    display: flex;
    align-items: center;

    margin-bottom: 20px;
`;

export const LockImg = styled.img`
    color: #fff;
    height: 40px;
    width: 40px;
`;

export const Span = styled.p`
    color: #fff;
    margin: 20px 0;

    a {
        color: #406080;
        text-decoration: none;
        font-weight: 600;

        &:hover {
            filter: brightness(1.2);
        }
    }
`;