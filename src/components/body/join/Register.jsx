import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPass2, setShowPass2] = useState(false)
    const [showPass3, setShowPass3] = useState(false)
    const [desable, setDesable] = useState(true)
    const [border1, setBorder1] = useState(true)
    const [border2, setBorder2] = useState(true)

    const check = () => {
        setDesable(!desable)
    }
    const handleGoogleSignIn = () => {
        joinByGoogle()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
                setLoading(false)
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false)
            })
    }
    const handleSignUp = (event) => {
        setClicked2(true)
        event.preventDefault()
        const email = event.target.email.value;
        const photo = event.target.image.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const fullName = event.target.firstName.value + ' ' + event.target.lastName.value;
        const pass = password.length;
        if (pass < 6) {
            setBorder1(false)
            sixPass()
            return
        }
        if (confirmPassword !== password) {
            passError()
            setBorder2(false)
            return
        }
        createUser(email, password)
            .then(result => {
                const logInUser = result.user
                // if (logInUser) {
                updateProfile(logInUser, { displayName: fullName, photoURL: photo })
                    .then(() => {
                        setLoading(false)
                        navigate(from, { replace: true })
                    })
                    .catch(error => {
                        exist()
                        setLoading(false)
                        console.log(error.message);
                    })
                // }
            })
            .catch(error => {
                exist()
                setLoading(false)
                console.log(error.message);
            })
        setBorder2(true)
    }

    return (
        <div className="hero bg-teal-50 rounded-xl w-full">
            <div className="flex-col lg:flex-row-reverse w-full px-5">
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleSignUp}>
                        <div className='md:grid-cols-2 grid-cols-1 grid'>
                            <div className='md:mr-3 mr-0'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="first name" name='firstName' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="last name" name='lastName' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="img" placeholder="image url" name='image' className="input input-bordered pt-2 pl-2" required />
                                </div>
                            </div>
                            <div className='md:ml-3 ml-0'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className='relative'>
                                        <input type={showPass2 ? 'text' : 'password'} placeholder="password" name='password' className={border1 ? "input input-bordered w-full border-gray-300" : "input input-bordered w-full border-red-700"} required />
                                        <div className='absolute top-3 right-3'>
                                            {
                                                showPass2 ? <i onClick={() => setShowPass2(!showPass2)} className="fa-regular fa-eye cursor-pointer"></i> : <i onClick={() => setShowPass2(!showPass2)} className="fa-regular fa-eye-slash cursor-pointer"></i>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <div className='relative'>
                                        <input type={showPass3 ? 'text' : 'password'} placeholder="confirm password" name='confirmPassword' className={border2 ? "input input-bordered w-full border-gray-300" : "input input-bordered w-full border-red-700"} required />
                                        <div className='absolute top-3 right-3'>
                                            {
                                                showPass3 ? <i onClick={() => setShowPass3(!showPass3)} className="fa-regular fa-eye cursor-pointer"></i> : <i onClick={() => setShowPass3(!showPass3)} className="fa-regular fa-eye-slash cursor-pointer"></i>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <input onChange={check} className='mt-4 rounded-sm mr-2' type="checkbox" />
                            <p>Accept our<Link to='/about' className='btn btn-link -ml-3 text-teal-600'>terms and conditions</Link></p>
                        </div>
                        <div className="form-control mt-3 modal-action">
                            {
                                desable ?
                                    <button className="btn w-3/5 mx-auto bg-teal-700 hover:bg-teal-950" disabled>Sign Up</button>
                                    :
                                    <button className="btn w-3/5 mx-auto bg-teal-700 hover:bg-teal-950">Sign Up</button>
                            }
                        </div>
                    </form>
                    <div className='mt-5 mb-2 flex flex-col items-center'>
                        <h1>You can also register with <span onClick={handleGoogleSignIn} className='text-2xl border-0 p-0 ml-1 normal-case font-bold text-orange-400 btn btn-link'>Google</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;