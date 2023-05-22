import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({ ctg }) => {

    return (
        <ol className='grid grid-cols-6 mt-5 bg-orange-200 text-black text-sm px-10 py-3 rounded-full'>
            <p>{ctg?.sellerName}</p>
            <p className='col-span-2'>{ctg?.name}</p>
            <p className='text-end'>{ctg?.price}</p>
            <p className='text-end mr-5'>{ctg?.quantity}</p>
            <p className='text-end'><Link to={`/view-product/${ctg.id}`} className='underline cursor-pointer text-blue-700'>View Details</Link></p>
        </ol>
    );
};

export default ShowAllProducts;