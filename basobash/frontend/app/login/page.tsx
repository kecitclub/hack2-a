"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleLogin = async () => {
        setError('');

        // Validate phone and password
        if (!phone || !password) {
            setError('Phone number and password are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, password }),
            });

            // Log the raw response text to check its content
            const rawText = await response.text();  // Read the raw response as text
            console.log('Raw response:', rawText);   // Log it to the console

            let data;
            try {
                data = JSON.parse(rawText);  // Attempt to parse it as JSON
            } catch (e) {
                console.error('Error parsing response as JSON:', e);
                setError('Failed to parse server response');
                return;
            }

            if (response.ok && data.token) {
                alert('Login successful');
                localStorage.setItem('token', data.token);
                router.push('/dashboard');
            } else {
                setError(data.error || 'Invalid phone number or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login');
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
