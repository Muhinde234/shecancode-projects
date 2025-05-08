import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../feature/input';
import { useAuth } from '../feature/authcontext';


export default function Login() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
        navigate('/dashboard');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
                className='container max-w-xl mx-auto flex flex-col justify-center items-center bg-gradient-to-t from-pink-400 to-purple-100 text-pink-300 shadow-lg mt-24 pt-23'
            >
                <div className='bg-white rounded-xl space-y-3 p-8'>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <Input
                            type="text"
                            placeholder="first name"
                            label="First Name:"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="last name"
                            label="Last Name:"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                    </div>
                    <Input
                        type="email"
                        placeholder="email"
                        label="Email:"
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        label="Password:"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="text-center">
                    <button 
                        type="submit" 
                        className="inline bg-white text-pink-400 font-extrabold mt-10 mb-3 rounded-full py-2 px-4 cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}