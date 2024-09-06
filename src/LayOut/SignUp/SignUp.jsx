import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useForm();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.agreeToTerms) {
            alert(`Sign-up successful! Name: ${formData.name}, Email: ${formData.email}`);
        } else {
            alert("You must agree to the terms and conditions to sign up.");
        }
    };



    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center items-center'>
                <div className='w-[500px] h-[630px] bg-[#F5F5F5] text-center p-6 rounded-lg'>
                    <div>
                        <h3 className='text-lg font-medium'>Welcome To</h3>
                        <h1 className='text-4xl font-medium'>Furnil<span className='text-[#1E99F5]'>Flex</span></h1>
                        <p className='text-[#707070] mt-1'>Signup for purchase your desire products</p>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-6'>
                        <div className='flex items-center gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First name</span>
                                </label>
                                <input type="email" placeholder="first name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last name</span>
                                </label>
                                <input type="email" placeholder="last name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                            })} placeholder="password"
                                name="password" className="input input-bordered relative" />
                            <span
                                className="absolute top-2/4 right-3 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        < path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                }
                            </span>
                        </div>

                        <div className='mt-3'>
                            <label className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                />
                                <p className='font-medium'>I agree to the <span className='underline'>Terms & Policy</span></p>
                            </label>
                        </div>
                        <div className="flex w-full flex-col border-opacity-50 mt-4">
                            <div className="card-actions">
                                <button className="btn bg-[#202020] text-white w-full">Sign Up</button>
                            </div>
                            <div className="divider text-sm mt-2">OR</div>
                            <div className='flex items-center gap-4 -mt-2'>
                                <div className="card-actions w-full">
                                    <button className="btn border border-[#D9D9D9] w-full">
                                        <img src="/icons/google.png" alt="" />Sign in with Google</button>
                                </div>
                                <div className="card-actions w-full">
                                    <button className="btn border border-[#D9D9D9] w-full">
                                        <img src="/icons/apple.png" alt="" />Sign in with Apple</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <h4 className='mt-3 font-medium'>Have an account?  <Link className='text-[#0F3DDE]' to="/login">Sign In</Link></h4>
                </div>
            </div>
            <div className='w-full relative'>
                <img className='w-full h-[945px]' src="/images/logIn.png" alt="" />
                <div className='center-content w-[445px]'>
                    <img className='mx-auto' src="/icons/Logo-log.png" alt="" />
                    <p className='text-[#C8C4C4] text-center'>
                        Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;