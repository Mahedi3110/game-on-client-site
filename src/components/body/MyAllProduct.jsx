import React from 'react';
import { Link } from 'react-router-dom';

const MyAllProduct = ({ ctg }) => {
    return (
        <div>
            <ol className='grid grid-cols-7 gap-3 mt-5 bg-orange-200 text-black text-sm px-10 py-3 text-center rounded-full'>
                <p>{ctg?.sellerName}</p>
                <p>{ctg?.name}</p>
                <p>{ctg?.category}</p>
                <p>{ctg?.price}</p>
                <p>{ctg?.quantity}</p>
                <div className='flex justify-center'>
                    <Link to={`/update/${ctg?._id}`} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Update</Link>
                </div>
                <div className='flex justify-center'>
                    <p className='btn btn-sm w-20 rounded-full normal-case'>Delete</p>
                </div>
            </ol>
        </div>
    );
};

export default MyAllProduct;