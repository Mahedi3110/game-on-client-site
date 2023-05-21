import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const ShowAllProducts = ({ ctg }) => {

    const [mod, setMod] = useState([])
    const view1 = (props) => {
        setMod(props)
    }
    const view2 = (props) => {
        setMod(props)
    }
    console.log(mod);

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='border border-gray-500 rounded-2xl overflow-hidden'>
                <img src={ctg.photo} alt={ctg.name} />
                <div className='p-4 flex flex-col justify-between h-56'>
                    <h1 className='text-white text-xl font-bold'>{ctg.name}</h1>
                    <p className='text-gray-400'>Ratting: 4.5</p>
                    <p className='text-gray-400'>Price: <span className='text-white font-bold text-lg'>{ctg.price} tk</span></p>
                    <label htmlFor="my-modal-3" onMouseOver={() => view1(ctg)} onClick={() => view2(ctg)} className='btn bg-orange-400 hover:bg-orange-600 w-full mt-2'>View Details</label>
                </div>
            </div>

            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                {user ?
                    <div className="modal w-full">
                        <div className="modal-box w-11/12 max-w-5xl relative">
                            <label htmlFor="my-modal-3" onClick={() => setMod([])} className="btn bg-orange-500 hover:bg-orange-600 border-0 btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div className='grid grid-cols-12 gap-5'>
                                <div className='col-span-5'>
                                    <img src={mod.photo} alt="" />
                                    <h3 className="text-2xl font-bold text-center">{mod.name}</h3>
                                    <div>
                                        <p className='text-lg font-bold'>Features</p>
                                        {
                                            mod?.features?.map(feature => <p>{feature}</p>)
                                        }
                                    </div>
                                    <p className='text-gray-700 mt-5 text-lg font-bold text-center border-4 border-orange-400 rounded-xl'>Price: <span className='text-xl'>{mod.price} tk</span></p>
                                </div>
                                <div className='col-span-7'>
                                    <p className='text-gray-700'>Ratting: <span className='text-lg font-bold'>4.5</span> </p>
                                    <p className='text-gray-700'>Available Quantity: <span className='text-lg font-bold'>58</span></p>
                                    <p className='text-gray-700'>Saller Name: <span className='text-lg font-bold'>Game On</span></p>
                                    <p className='text-gray-700'>Saller Email: <span className='text-lg font-bold'>gameon@gmail.com</span></p>
                                    <p className='text-xl font-bold mt-2'>About</p>
                                    <p>{mod.about}</p>
                                    <p className="py-4">{ }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="modal">
                        <div className="modal-box relative flex flex-col items-center">
                            <label htmlFor="my-modal-3" className="btn bg-orange-500 border-0 hover:bg-orange-600 btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Please login</h3>
                            <p className="py-4">If you want to see details about this page please login first.</p>
                            <Link className='btn w-3/5 bg-orange-400 border-0 hover:bg-orange-600' to='/login'>Ok</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShowAllProducts;