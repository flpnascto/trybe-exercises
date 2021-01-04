export const login = (user, password) => (
    { 
        type: 'LOGIN',
        payload: { user, password }
    }
);

export const logout = () => (
    { 
        type: 'LOGOUT',
    }
);
