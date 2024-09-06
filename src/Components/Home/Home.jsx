import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const { product } = useContext(AuthContext);

    return (
        <div className='my-12'>
            <div className='grid grid-cols-4 gap-8'>
                <div className='border-e text-center'>
                    <div className='text-[#717171]'>

                        <button className='btn bg-[#0E0E0E] text-white text-xl w-64 active'>Chair</button>

                        <hr className='w-64 mx-auto mt-2' />

                        <button className='mt-2 bg-transparent border-none shadow-none btn w-64 text-xl font-medium'>Clothing</button>

                        <hr className='w-64 mx-auto mt-2' />

                        <button className='mt-2 btn bg-transparent border-none shadow-none w-64 text-xl font-medium'>Electronics</button>
                    </div>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-5'>

                        {
                            product?.map(p => <div key={p._id} className="card bg-white w-[277px] h-[484px] shadow border pt-5">
                                <div className='w-60 h-60 bg-[#F2F2F2] flex justify-center items-center rounded-lg mx-auto'>
                                    <img
                                        src={p?.picture}
                                        alt="product"
                                        className="rounded-xl w-48 h-48" />
                                </div>
                                <div className="card-body pt-4 px-5 relative">
                                    <h2 className="card-title text-lg">{p?.name}</h2>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-lg font-medium text-[#343434]'>€{p?.price}</p>
                                        <p className='text-lg font-medium text-[#ABABAB] line-through'>€{p?.d_price}</p>
                                        <p className='text-lg font-medium text-[#B92E2E]'>{p?.offer}% OFF</p>
                                    </div>
                                    <p className='text-[#838383] text-sm'>{p?.details}</p>
                                    <div className="card-actions absolute w-11/12 bottom-3 left-3">
                                        <button className="btn bg-[#202020] text-white w-full">
                                            <img src="/icons/Added.png" alt="" />Add to cart</button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-14'>
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn btn-disabled">...</button>
                    <button className="join-item btn">99</button>
                    <button className="join-item btn">100</button>
                </div>
            </div>
        </div>
    );
};

export default Home;