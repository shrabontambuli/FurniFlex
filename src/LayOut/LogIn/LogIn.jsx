import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const { signIn, googleSignIn, showPassword, setShowPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // sign in with email and password //

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(err => console.log(err))
    };

    // sign up with Google //

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                axios.post('http://localhost:5000/users', saveUser)
                    .then((data) => {
                        if (data.data.message) {
                            navigate(from);
                        }
                    })
            })
    };


    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center items-center'>
                <div className='w-[500px] h-[620px] bg-[#F5F5F5] px-6 py-10 rounded-lg'>
                    <div>
                        <h3 className='text-3xl font-medium'>Welcome Back!</h3>
                        <p className='text-[#707070] text-lg'>Enter your Credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
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
                                className="absolute top-[50%] right-3 transform -translate-y-2/3 cursor-pointer"
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
                            <label className="label flex justify-end">
                                <p className="text-[#1E99F5] mt-2">Forgot password?</p>
                            </label>
                        </div>

                        <div className='mt-3'>
                            <label className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    {...register("checked", { required: true })}
                                // checked={formData.agreeToTerms}
                                // onChange={handleChange}
                                />
                                <p className='font-medium'>I agree to the <span className='underline'>Terms & Policy</span></p>
                            </label>
                        </div>
                        <div className="flex w-full flex-col border-opacity-50 mt-4">
                            <div className="card-actions">
                                <button className="btn bg-[#202020] text-white w-full">Sign In</button>
                            </div>
                            <div className="divider text-sm mt-2">OR</div>

                        </div>
                    </form>
                    <div className='flex items-center gap-4 -mt-2'>
                        <div className="card-actions w-full">
                            <button onClick={handleGoogle} className="btn border border-[#D9D9D9] w-full">
                                <img src="/icons/google.png" alt="" />Sign in with Google</button>
                        </div>
                        <div className="card-actions w-full">
                            <button className="btn border border-[#D9D9D9] w-full">
                                <img src="/icons/apple.png" alt="" />Sign in with Apple</button>
                        </div>
                    </div>
                    <h4 className='mt-5 font-medium text-center'>Have an account?  <Link className='text-[#0F3DDE]' to="/signup">Sign Up</Link></h4>
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

export default LogIn;