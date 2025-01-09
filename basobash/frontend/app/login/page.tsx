"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleLogin = async () => {
        if (!phone || !password) {
            setError('Phone number and password are required');
            return;
        }

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, password }),
        });

        const data = await response.json();

        if (response.ok && data.token) {
            alert('Login successful');
            // Optionally store the token in local storage or cookies
            localStorage.setItem('token', data.token);
            router.push('/dashboard'); // Redirect to a secure page after login
        } else {
            setError(data.error || 'Invalid phone number or password');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
