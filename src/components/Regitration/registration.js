import {useEffect, useState} from 'react';
import Input from '../Input/input';

import { registrationFormData } from './constants';
import './styles.css';

function Registration() {
    const [registrationData, setRegistrationData] = useState(
        {
            name: '',
            surname: '',
            password: '',
            repeatPass: '',
            contactNumber: '',
        }
    );

    const [isFormValid, setForm] = useState(
        {
            name: [false,'Name should not be empty'],
            surname: [false,'Surname should not be empty'],
            password: [false,'Password should not be empty'],
            repeatPass: [false,'Passwords do not match'],
            email: [false,'Email should not be empty'],
        }
    );

    // useEffect(() => {
    //     fetch('http://localhost:8080/users', {
    //         mode: 'no-cors',
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ name: 'Valod' }),
    //     }).then((res) => console.log(JSON.stringify(res), 'response'));
    // }, [])


    function isFormsValid(placeholder, event) {
        const { password, contactNumber } = registrationData;
        const a = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m',
            'N','n','O','o','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];
        let res = true;
        switch (placeholder) {
            case 'name':
                event.target.value.split('').forEach((item) => {
                    if(!(a.includes(item))) {
                        setForm(prev => ({
                            ...prev,
                            name: [false, 'use only letters'],
                        }));
                        res = false;
                    }
                });
                break;
            case 'surname':
                event.target.value.split('').forEach((item) => {
                    if(!(a.includes(item))) {
                        setForm(prev => ({
                            ...prev,
                            surname: [false, 'use only letters'],
                        }));
                        res = false;
                    }
                });
                break;
            case 'password' :
                if(event.target.value.length < 6) {
                    setForm(prev => ({
                        ...prev,
                        password: [false, 'Password length must be at least 6 characters'],
                    }));
                    res = false;
                }
                break;
            case 'repeatPass' :
                if(event.target.value !== password) {
                    setForm(prev => ({
                        ...prev,
                        repeatPass: [false, 'does not match confirmation'],
                    }));
                    res = false;
                }
                break;
            case 'contactNumber' :
                    if(event.target.value.length !== 11) {
                        setForm(prev => ({
                            ...prev,
                            contactNumber: [false, 'number is not valid'],
                        }));
                        res = false;
                    }
                break;
        }
        return  res;
    }

    const handleBlur = (event) => {
        if (!event.target.value.length ) {
            setForm(prev => ({
                ...prev,
                [event.target.id]: [false, 'The field should not be empty'],
            }));
        }
        else if(isFormsValid(`${event.target.id}`, event)) {
            setRegistrationData({
                ...registrationData,
                [event.target.id]: event.target.value,
            });
        }
    }

    const handleFocus = (event) => {
        setForm(prev => ({
            ...prev,
            [event.target.id]: [false, 'The field is not fill'],
        }));
    }

    const handleRegisterClick = () => {
        // if(Object.values(registrationData).includes('')) {
        //     for(let key in isFormValid) {
        //         if(!registrationData[key].length) {
        //             setForm(prev =>({
        //                 ...prev,
        //                 [key]: [true, isFormValid[key][1]]
        //             }));
        //         }
        //     }
        // }
        // else {
        //     setRegistrationData(prev => ({
        //         ...prev,
        //         isLoggedIn: false,
        //         likedList: [],
        //         basket: [],
        //     }))
        //     if(!(localStorage.getItem(`${contactNumber}`))) {
        //         localStorage.setItem(`${contactNumber}`, JSON.stringify(registrationData)); // & render user page ;
        //     }
        //     else {
        //         setForm(prev =>({
        //             ...prev,
        //             contactNumber: [true, 'Already registered with this number']
        //         }));
        //     }
        // }
    }

    return (
        <div className='registrationWrapper'>
            <div className='title'>Create an account</div>
            {registrationFormData.map(({ id, tabIndex, type }) => (
                <Input
                    errorInfo={{isError: isFormValid[id][0], message: isFormValid[id][1]}}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                    tabindex={tabIndex}
                    type={type}
                    key={id}
                    id={id}
                />
            ))}
            <button className="resisterButton" onClick={handleRegisterClick} tabIndex='6'>REGISTER</button>
        </div>
    )
}

export { Registration }