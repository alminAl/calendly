import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../../hooks/useSignup';
import './Form.css'
const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(name, email, address, phone, password)
    }
    return (
        <div>
            <div className='mt-6'>
                <h1 className='text-center text-2xl lg:text-5xl font-bold heading'>CALENDLY</h1>
                <h5 className='text-center text-base lg:text-2xl font-bold '>Sign Up with Calendry for free</h5>
            </div>
            <div className='flex justify-center items-center mt-5 mb-20'>
                <div className="card w-11/12 lg:w-2/5 md:w-2/4 bg-secondary shadow-xl rounded-lg">
                    <div className="card-body p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />

                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Secret Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Secret Password Again"
                                    onChange={(e) => setConfirm(e.target.value)}
                                    value={confirm}
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <input className='btn w-full mt-5 btnColour text-xl border-0 ' disabled={isLoading} type="submit" value="Submit" />
                            {error && <div className="text-red-500">{error}</div>}
                        </form>
                        <h4 className='text-lg lg:text-xl font-bold mt-4'>Already have an account? <Link to='/login' style={{ color: '#1E40AF' }}>Login</Link></h4>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Form;