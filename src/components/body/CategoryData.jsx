import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const CategoryData = ({ ctg }) => {

    const { user } = useContext(AuthContext)

    const [data, setData] = useState([])

    const view = (props) => {
        setData(props)
    }

    return (
        <div>
            <div className='border border-gray-500 rounded-2xl overflow-hidden'>
                <img src={ctg.photo} alt={ctg.name} />
                <div className='p-4 flex flex-col justify-between h-56'>
                    <h1 className='text-white text-xl font-bold'>{ctg.name}</h1>
                    <p className='text-gray-400'>Ratting: 4.5</p>
                    <p className='text-gray-400'>Price: <span className='text-white font-bold text-lg'>{ctg.price} tk</span></p>
                    <label onClick={() => view(ctg)} htmlFor="my-modal-3" className='btn bg-orange-400 hover:bg-orange-600 w-full mt-2'>View Details</label>
                </div>
            </div>

            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                {user ?
                    <div className="modal w-full">
                        <div className="modal-box w-4xl relative grid grid-cols-2">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <img src={data.photo} alt="" />
                            <div>
                                <h3 className="text-lg font-bold">{data.name}</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
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

export default CategoryData;