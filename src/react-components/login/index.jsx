import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('test@admin.com');
    const [password, setPassword] = useState('admin');

    const doLogin = () => {
        navigate('/todo');
    }

    return <div className="login-wrapper">
        <h3>Login Page</h3>
        <form onSubmit={doLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    </div>;
}

export default Login;