import React from 'react';
import { Link } from 'react-router-dom';
import RegisterContainer from './RegisterContainer';

const RegisterPage = ({serverPort}) => {
    return <>
        <RegisterContainer serverPort={serverPort}/>

    </>;
};

export default RegisterPage;