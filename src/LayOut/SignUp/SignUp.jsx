import React, { useState } from 'react';

const SignUp = () => {

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
                        <h1 className='text-4xl font-medium mt-2'>Furnil<span className='text-[#1E99F5]'>Flex</span></h1>
                        <p className='text-[#707070] mt-2'>Signup for purchase your desire products</p>
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
                            <input type="email" placeholder="Password" className="input input-bordered" required />
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
                                <button className="btn bg-[#202020] text-white w-full">Signup</button>
                            </div>
                            <div className="divider text-sm">OR</div>
                            <div className='flex items-center gap-4'>
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