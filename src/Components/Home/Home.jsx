import React from 'react';

const Home = () => {
    return (
        <div className='grid grid-cols-4 gap-8 my-12'>
            <div className='border-e text-center'>
                <div className='text-[#717171]'>

                    <button className='btn bg-[#0E0E0E] text-white text-xl w-64 active'>Rocking chair</button>

                    <hr className='w-64 mx-auto mt-2' />

                    <button className='mt-2 bg-transparent border-none shadow-none btn w-64 text-xl font-medium'>Side chair</button>

                    <hr className='w-64 mx-auto mt-2' />

                    <button className='mt-2 btn bg-transparent border-none shadow-none w-64 text-xl font-medium'>Lounge chair</button>
                </div>
            </div>
            <div className='col-span-3'>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-5'>
                    <div className="card bg-white w-[277px] h-[484px] shadow border pt-5">
                        <div className='w-60 h-60 bg-[#F2F2F2] flex justify-center items-center rounded-lg mx-auto'>
                            <img
                                src="public/icons/image.png"
                                alt="product"
                                className="rounded-xl" />
                        </div>
                        <div className="card-body pt-4 px-5 relative">
                            <h2 className="card-title text-lg">Recliner Chair Wood</h2>
                            <div className='flex items-center gap-2'>
                                <p className='text-lg font-medium text-[#343434]'>€299.00</p>
                                <p className='text-lg font-medium text-[#ABABAB] line-through'>€350.00</p>
                                <p className='text-lg font-medium text-[#B92E2E]'>30% OFF</p>
                            </div>
                            <p className='text-[#838383] text-sm'>It has a backrest that can be tilted back, and often a footrest extended</p>
                            <div className="card-actions absolute w-11/12 bottom-3 left-3">
                                <button className="btn bg-[#202020] text-white w-full">
                                    <img src="/icons/Added.png" alt="" />Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white w-[277px] h-[484px] shadow border pt-5">
                        <div className='w-60 h-60 bg-[#F2F2F2] flex justify-center items-center rounded-lg mx-auto'>
                            <img
                                src="public/icons/image.png"
                                alt="product"
                                className="rounded-xl" />
                        </div>
                        <div className="card-body pt-4 px-5 relative">
                            <h2 className="card-title text-lg">Recliner Chair Wood</h2>
                            <div className='flex items-center gap-2'>
                                <p className='text-lg font-medium text-[#343434]'>€299.00</p>
                                <p className='text-lg font-medium text-[#ABABAB] line-through'>€350.00</p>
                                <p className='text-lg font-medium text-[#B92E2E]'>30% OFF</p>
                            </div>
                            <p className='text-[#838383] text-sm'>It has a backrest that can be tilted back, and often a footrest extended</p>
                            <div className="card-actions absolute w-11/12 bottom-3 left-3">
                                <button className="btn bg-[#202020] text-white w-full">
                                    <img src="/icons/Added.png" alt="" />Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white w-[277px] h-[484px] shadow border pt-5">
                        <div className='w-60 h-60 bg-[#F2F2F2] flex justify-center items-center rounded-lg mx-auto'>
                            <img
                                src="public/icons/image.png"
                                alt="product"
                                className="rounded-xl" />
                        </div>
                        <div className="card-body pt-4 px-5 relative">
                            <h2 className="card-title text-lg">Recliner Chair Wood</h2>
                            <div className='flex items-center gap-2'>
                                <p className='text-lg font-medium text-[#343434]'>€299.00</p>
                                <p className='text-lg font-medium text-[#ABABAB] line-through'>€350.00</p>
                                <p className='text-lg font-medium text-[#B92E2E]'>30% OFF</p>
                            </div>
                            <p className='text-[#838383] text-sm'>It has a backrest that can be tilted back, and often a footrest extended</p>
                            <div className="card-actions absolute w-11/12 bottom-3 left-3">
                                <button className="btn bg-[#202020] text-white w-full">
                                    <img src="/icons/Added.png" alt="" />Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;