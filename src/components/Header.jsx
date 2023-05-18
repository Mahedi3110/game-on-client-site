import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Navbar, Spinner, Tooltip } from 'flowbite-react';

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const pic = user?.photoURL?.length;
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <Navbar
                className='bg-teal-50 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
                fluid={true}
                rounded={true}
            >
                <Link
                    to='/'
                    className='flex'
                >
                    <img
                        src="https://www.linkpicture.com/q/favpng_masterchef-logo-television-show-wordmark.png"
                        className="mr-3 h-10"
                        alt="Master Chef Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl text-teal-600 font-bold dark:text-white">
                        Master Chef
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {loading ?
                        <Spinner className='mt-3 mb-2 mr-16 ml-9' aria-label="Default status example" />
                        :
                        user ? <div className='flex items-center'>
                            <NavLink className={({ isActive }) => isActive ? 'text-blue-700 mx-7 mt-1' : 'my-1 mx-7 hover:text-blue-500'} to="/profile">
                                {
                                    pic > 12 ?
                                        <Tooltip content={user.displayName}>
                                            <img className='w-10 h-10 rounded-full border-2 border-gray-400' src={user.photoURL} alt='User' />
                                        </Tooltip>
                                        :
                                        <Tooltip content={user.displayName}>
                                            <img className='w-10 h-10 rounded-full border-2 border-gray-400' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='User' />
                                        </Tooltip>
                                }
                            </NavLink>
                            <Tooltip content='Log out'>
                                <i onClick={handleLogOut} className="fa-solid fa-right-from-bracket text-3xl cursor-pointer text-teal-700 hover:text-teal-900 mr-4"></i>
                            </Tooltip>
                        </div> :
                            <NavLink to="/join" className="btn bg-teal-600 hover:bg-teal-800 normal-case border-0 font-bold rounded-lg px-12 text-center mr-3 md:mr-0 text-md">Join</NavLink>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'}
                            to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'}
                            to="/hireChef">
                            Hire Chef
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'}
                            to="/about">
                            About
                        </NavLink>
                    </div>
                    <div className='mb-3 md:mb-0'>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-teal-600 mx-5 font-bold border-b-2 border-teal-600' : 'mx-5 hover:text-teal-600 hover:border-b-2 hover:border-teal-600'}
                            to="/blog">
                            Blog
                        </NavLink>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;