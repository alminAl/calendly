import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css'
const Form = () => {
    return (
        <div>
            <div className='mt-6'>
                <h1 className='text-center text-2xl lg:text-5xl font-bold heading'>CALENDLY</h1>
                <h5 className='text-center text-base lg:text-2xl font-bold '>Sign Up with Calendry for free</h5>
            </div>
            <div className='flex justify-center items-center mt-5 mb-20'>
                <div className="card w-11/12 lg:w-2/5 md:w-2/4 bg-secondary shadow-xl rounded-lg">
                    <div className="card-body p-5">
                        <form >
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Secret Password"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Your Secret Password Again"
                                    className="input input-bordered w-full h-10 border-2 pl-1 rounded-lg" required />
                            </div>

                            <input className='btn w-full mt-5 btnColour text-xl border-0 ' type="submit" value="Submit" />
                        </form>
                        <h4 className='text-lg lg:text-xl font-bold mt-4'>Already have an account? <Link to='/login' style={{ color: '#1E40AF' }}>Login</Link></h4>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Form;