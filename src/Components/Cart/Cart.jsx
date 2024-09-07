import React, { useContext, useEffect} from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Cart = () => {
    const { user, cart, setCart, totalPrice, increaseQuantity, decreaseQuantity } = useContext(AuthContext);

    // fetching user add to cart her data //

    useEffect(() => {
        axios.get(`https://furnil-flex-server.vercel.app/cart?email=${user.email}`)
            .then(res => {
                setCart(res.data);
            });
    }, []);

    // handle delete  cart item //

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://furnil-flex-server.vercel.app/cart/${item._id}`)
                    .then(data => {
                        if (data?.data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        axios.get(`https://furnil-flex-server.vercel.app/cart?email=${user.email}`)
                            .then(res => {
                                setCart(res.data)
                            });
                    })
            }
        })
    }


    return (
        <div className='grid grid-cols-4 mt-10 mb-20 gap-4'>
            <div className='col-span-3 w-11/12'>
                <h1 className='text-3xl font-medium'>An overview of your order</h1>
                <div className='bg-[#DEDEDE] mt-7 p-6 pt-2 rounded-xl'>
                    {
                        cart?.map(p =>
                            <div key={p._id} className='border-b-2 border-[#ECECEC] pb-4 mt-6'>
                                <div className='flex justify-between'>
                                    <div className='flex gap-4'>
                                        <div className='flex items-center gap-6'>
                                            <div className='bg-white border border-[#DEDEDE] rounded-xl h-12 w-24 text-center py-2'>
                                                <button className='text-xl' onClick={() => decreaseQuantity(p._id)}>
                                                    -
                                                </button>
                                                <span className='font-semibold' style={{ margin: '0 10px' }}>{p.quantity}</span>
                                                <button className='text-xl' onClick={() => increaseQuantity(p._id)}>+</button>
                                            </div>
                                            <div className='w-20 h-20 bg-[#F2F2F2] flex justify-center items-center rounded-lg mx-auto'>
                                                <img
                                                    src={p?.picture}
                                                    alt="product"
                                                    className="rounded-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='text-base font-semibold'>{p?.name}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <img onClick={() => handleDelete(p)} src="/icons/x.png" alt="" />
                                    </div>
                                </div>
                                <h1 className='text-xl font-bold text-right mt-3'>€{p?.price * p.quantity}.00</h1>
                            </div>)
                    }
                </div>
            </div>
            <div>
                <h1 className='text-[28px] font-normal'>Oder details</h1>
                <div className='bg-[#DEDEDE] rounded-xl p-4 border border-[#ECECEC] mt-7'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[#656565]'>Subtotal</p>
                        {/* <p className='text-[#656565]'>€ 1071.00</p> */}
                        <p className='text-[#656565]'>€ {totalPrice}.00</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='text-[#656565]'>Shipping</p>
                        <p className='text-[#656565]'>Free</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='inline-flex items-center gap-2 text-[#656565]'>Estimated Tax <img src="/icons/tax.png" alt="" /></p>
                        <p className='text-[#656565]'>€ -</p>
                    </div>
                    <hr className='bg-[#DEDEDE] my-4' />
                    <div className='flex justify-between items-center text-xl font-medium'>
                        <p className='text-[#656565]'>Total</p>
                        <p className='text-black'>€ {totalPrice}.00</p>
                    </div>
                </div>
                <div className="card-actions mt-5">
                    <button className="btn bg-[#202020] text-white w-full">
                        <img src="/icons/Added.png" alt="" />Go To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;