"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/login');  // Redirect to login if no token found
        } else {
            // Optionally, make a request to a backend API to verify the token
            setMessage('Welcome to your dashboard!');
        }
    }, [router]);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
