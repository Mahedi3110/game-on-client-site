import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import ShowAllProducts from './ShowAllProducts';

const AllProduct = () => {

    useTitle("All Products")

    const loaderDatas = useLoaderData()

    return (
        <div className='bg-black pt-20'>
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='mt-10 mx-40'>
                <h1 className='text-white text-5xl text-center font-bold'>Check out all of <span className='text-orange-400'>our <br /> products</span> here</h1>
                <p className='text-gray-300 text-center mt-5'>Discover a world of possibilities on our all products page. From trendy fashion to cutting-edge gadgets, we've curated a diverse selection just for you. Browse, compare, and find exactly what you're looking for. With our user-friendly interface, exploring and checking out all products has never been easier. Start exploring today!</p>
            </div>
            <div className='grid grid-cols-3 mx-24 gap-10 mt-16'>
                {
                    loaderDatas.map(ctg =>
                        <ShowAllProducts
                            key={ctg.id}
                            ctg={ctg}
                        ></ShowAllProducts>)
                }
                <button>Show All</button>
            </div>
        </div>
    );
};

export default AllProduct;