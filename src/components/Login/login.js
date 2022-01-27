import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

import Input from '../Input/input';

function Login() {
    const { setUser, user } = useAuthContext();
    let navigate = useNavigate();
    const [loginData, setLoginData] = useState(
        {
            name: {
                value: '',
                isError: false,
                message: 'Name can not be empty'
            },
            password: {
                value: '',
                isError: false,
                message: 'Password can not be empty'
            }
        }
    );

    console.log(loginData, 'LOGIN DATA');

    useEffect(() => {
        console.log(user, 'useeeeeeer');
        if(user.id) {
            navigate('/');
        }
    }, [user])

    const handleLoginClick = () => {
        const { name, password } = loginData;
        if(!name.length || !password.length) {
            setLoginData(prev => ({
                ...prev,
                name: { ...name, isError: !name.length },
                password: { ...password, isError: !password.length},

            }))
        } else {
            console.log('Log ::: user ::: ', user);
            setUser({...loginData, id: name})
        }

    };

    const handleInputChange = (event) => {
        setLoginData(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }))
    }

    return (
        <div className='registrationWrapper'>
            <div className='title'>Log In</div>
            <Input
                errorInfo={{isError: loginData.name.isError, message: loginData.name.message}}
                handleChange={handleInputChange}
                tabindex='1'
                type='text'
                id="name"
             />
            <Input
                errorInfo={{isError: loginData.password.isError, message: loginData.password.message}}
                handleChange={handleInputChange}
                tabindex='2'
                type="password"
                id="password"
             />
            <button className="resisterButton" onClick={handleLoginClick} tabIndex='3'>Login</button>
        </div>
    )
}

export default Login;