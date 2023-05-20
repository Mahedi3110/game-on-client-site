import { Accordion, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category';
import 'animate.css';
import './Home.css'
import CategoryData from '../CategoryData';

const Home = () => {

    const [datas, setDatas] = useState([])
    const [allCategory, setAllCategory] = useState([])

    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch(`http://localhost:7000/category`);
            const data = await res.json();
            setDatas(data);
            setAllCategory(data[0]?.product)
        }
        fetchFunction();
    }, [])


    return (
        <div className='mt-10 bg-black pt-8 pb-32'>

            <div className='bgImg height flex items-center flex-col shadow-inner shadow-black'>
                <h1 className='text-6xl font-bold text-white text-center mt-36 animate__animated animate__fadeInDown'><span className='text-orange-400'>Explore </span>the gaming world <br /> with <span className='text-orange-400'>Game On</span></h1>
                <p className='text-gray-400 mt-5 mx-40 text-center animate__animated animate__fadeInUp'>Discover a world of gaming excellence at our online store. We offer a vast selection of top-quality gaming products, from consoles and accessories to the latest game releases. Browse our user-friendly website and find the perfect gear to enhance your gaming experience. With secure payment options and fast shipping, we're your go-to destination for all your gaming needs. Elevate your play today!</p>
                <Link to="/all-products" className='btn mt-20 normal-case bg-orange-400 hover:bg-orange-600 w-60 text-lg font-bold animate__animated animate__fadeInUp'>Check Our All Products</Link>
            </div>

            <h1 className='text-5xl font-bold text-white text-center mt-24'>Watch our all categories <br /> in this <span className='text-orange-400'>gallery</span></h1>
            <p className='text-gray-400 mt-5 text-center mx-40'>Watch out for the latest gaming products! Explore a wide range of categories to enhance your gaming experience. Discover powerful gaming laptops, high-performance gaming consoles, immersive virtual reality headsets, cutting-edge gaming accessories, and innovative gaming peripherals. Stay ahead of the game with these must-have products!</p>

            <div className="h-screen mt-16 flex justify-center mx-20 relative">
                <img className='absolute w-full px-8 -mt-4 h-full pb-6 top-0' src="https://i.ibb.co/yhvskkR/404.png" alt="" />
                <Carousel className='!h-4/5 !w-4/6'>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-50 w-full h-full' src="https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>Game Pad & Controller</h1>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-40 w-full h-full' src="https://img.freepik.com/premium-photo/white-black-game-consoles-controllers-with-black-background_264404-265.jpg?w=826" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>Gaming Console</h1>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-30 w-full h-full' src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/01/13063801/gaming-in-metaverse.png" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>VR & Controller</h1>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-30 w-full h-full' src="https://visor.ph/wp-content/uploads/2021/12/wheel-MAIN1.jpg" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>Racing Wheel</h1>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-30 w-full h-full' src="https://cdn.mos.cms.futurecdn.net/WVtyZUFRDTQRLqwzsUJFpS-1200-80.jpg" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>Nintendo Gaming Switch</h1>
                    </div>
                    <div className="flex relative flex-col h-full items-center justify-center dark:text-white">
                        <img className='opacity-30 w-full h-full' src="https://www.pixel4k.com/wp-content/uploads/2020/01/cyberpunk-2077-5k-2019-r7-3840x2160-1.jpg" alt="" />
                        <h1 className='text-5xl font-bold absolute bottom-32 text-orange-400'>Games</h1>
                    </div>
                </Carousel>
            </div>

            <h1 className='text-center text-5xl text-white font-bold mt-10'>Shop by <span className='text-orange-400'>category</span></h1>
            <p className='text-gray-400 mt-5 text-center mx-40'>Discover an extensive range of gaming products at our online shop. Immerse yourself in thrilling gameplay with high-performance gaming consoles, cutting-edge accessories, and immersive virtual reality experiences. Stay ahead of the competition with the latest releases and enhance your gaming setup with top-notch equipment. Shop now for an unparalleled gaming experience.</p>
            <div className='grid grid-cols-6 mx-24 gap-10 mt-16'>
                {
                    datas.map(data =>
                        <Category
                            key={data.id}
                            data={data}
                            btn={setAllCategory}
                        ></Category>)
                }
            </div>
            <div className='grid grid-cols-3 mx-24 gap-10 mt-16'>
                {
                    allCategory?.map(ctg =>
                        <CategoryData
                            key={ctg.id}
                            ctg={ctg}
                        ></CategoryData>)
                }
            </div>

            <h1 className='text-center text-4xl text-white font-bold mt-32'>Frequently asked <span className='text-orange-400'>questions</span></h1>
            <p className='text-gray-400 mx-40 text-center mt-5'>Here we emplement some frequently asked questions. You can check this questions and the answers. If you have any other questions or if you want to know more about us then please check the about page or contact with us.</p>
            <Accordion className='mx-24 mt-10'>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        How to order?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Our Warrenty policy?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Product return policy?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        How to change or cancel order?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Our payment method?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Home;