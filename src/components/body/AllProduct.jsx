import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import ShowAllProducts from './ShowAllProducts';

const AllProduct = () => {

    useTitle("All Products")

    const loaderDatas = useLoaderData()

    const [show, setShow] = useState(false);

    return (
        <div className='bg-black pt-20 pb-32'>
            <div className='text-white mt-10 text-xl mx-24'>
                <ol className='grid grid-cols-6 mt-5 bg-orange-400 text-black text-sm px-10 py-3 rounded-full'>
                    <p>Seller</p>
                    <p className='col-span-2'>Product Name</p>
                    <p className='text-end'>Price</p>
                    <p className='text-end -mr-7'>Available Quantity</p>
                    <p className='text-end'>View Details</p>
                </ol>
                {show ?
                    loaderDatas.map(ctg =>
                        <ShowAllProducts
                            key={ctg.id}
                            ctg={ctg}
                        ></ShowAllProducts>)
                    :
                    loaderDatas.slice(0, 21).map(ctg =>
                        <ShowAllProducts
                            key={ctg.id}
                            ctg={ctg}
                        ></ShowAllProducts>)
                }
            </div>
            <div className='flex justify-center mt-20'>
                <button className='btn rounded-full bg-orange-400 hover:bg-orange-600 w-1/5' onClick={() => setShow(!show)}>{show ? "Show less" : "Show All"}</button>
            </div>
        </div>
    );
};

export default AllProduct;