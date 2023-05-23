import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Update = () => {

    useTitle("Update")

    const paramsData = useParams();
    const loaderDatas = useLoaderData();

    const data = loaderDatas.find(loaderData => loaderData._id === paramsData.id)

    const handleForm = (event) => {
        console.log(event);
    }

    return (
        <div>
            <div className='bg-black pt-32 pb-36'>
                <div className='text-black mx-32'>
                    <div className="hero bg-orange-200 rounded-xl w-full pb-12 pt-5">
                        <div className="flex-col lg:flex-row-reverse w-full px-5">
                            <div className="flex-shrink-0 w-full">
                                <form onSubmit={handleForm}>
                                    <div className='md:grid-cols-2 grid-cols-1 grid mx-5'>
                                        <div className='md:mr-3 mr-0'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Image</span>
                                                </label>
                                                <input type="img" placeholder="image url" name='photo' className="input input-bordered pt-2 pl-2" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Product Name</span>
                                                </label>
                                                <input type="text" placeholder="product name" name='name' className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Seller Name</span>
                                                </label>
                                                <input type="text" name='sellerName' className="input input-bordered text-black" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="email" name='email' className="input text-black input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Sub Category</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='text' placeholder="sub category" name='category' className="input input-bordered w-full border-gray-300" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='md:ml-3 ml-0'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='text' placeholder="price" name='price' className="input input-bordered w-full border-gray-300" required />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Rating</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='text' placeholder="rating" name='rating' className="input input-bordered w-full border-gray-300" required />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Available Quantity</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type='text' placeholder="available quantity" name='quantity' className="input input-bordered w-full border-gray-300" required />
                                                </div>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">About</span>
                                                </label>
                                                <div className='relative'>
                                                    <textarea id="message" required rows="4" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="about" name='about'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control mt-10 modal-action">
                                        <button className="btn w-1/5 mx-auto bg-orange-400 hover:bg-orange-600 border-0 rounded-full">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster
                    toastOptions={{
                        style: {
                            padding: '16px',
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default Update;