import React from 'react';
import { Navigate } from 'react-router-dom';

import {useAuthContext} from './AuthContext';

function WithAuth({children}) {
    const { user } = useAuthContext();

    if (!user.id) {
        return <Navigate to="/login" />
    }

    return children;
}

export default WithAuth;