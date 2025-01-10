"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [phone, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const router = useRouter();

    const validatePhone = (phone: string) => {
        const phoneRegex = /^[0-9]{10}$/; // Adjust for your phone number format
        return phoneRegex.test(phone);
    };

    const validatePassword = (password: string) => {
        return password.length >= 6; // Ensure password is at least 6 characters
    };

    const handleRegister = async () => {
        setError('');
        setSuccess('');

        // Validate phone and password
        if (!phone || !password) {
            setError('Phone number and password are required');
            return;
        }
        if (!validatePhone(phone)) {
            setError('Please enter a valid phone number');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Registration successful. Redirecting to login...');
                setTimeout(() => router.push('/login'), 2000);
            } else {
                setError(data.error || 'Registration failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
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
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
