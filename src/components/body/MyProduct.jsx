import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import MyAllProduct from './MyAllProduct';

const MyProduct = () => {

    useTitle("My Choice")

    const { user } = useContext(AuthContext)
    const loaderDatas = useLoaderData()

    return (
        <div className='bg-black h-screen pt-32 px-24'>
            <ol className='grid grid-cols-7 gap-3 mt-5 bg-orange-400 text-black text-sm px-10 py-3 rounded-full text-center'>
                <p>Seller Name</p>
                <p>Product Name</p>
                <p>Sub-category</p>
                <p>Price</p>
                <p>Available Quantity</p>
                <p>Update</p>
                <div className='flex justify-center'>
                    <p className='text-end btn btn-sm w-28 rounded-full normal-case'>Delete All</p>
                </div>
            </ol>
            {
                loaderDatas.filter(post => post?.email?.toLowerCase().includes(user?.email?.toLowerCase()))
                    .map(ctg =>
                        <MyAllProduct
                            key={ctg._id}
                            ctg={ctg}
                        ></MyAllProduct>)
            }
        </div>
    );
};

export default MyProduct;