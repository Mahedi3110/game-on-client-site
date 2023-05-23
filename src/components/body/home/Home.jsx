import { Accordion, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category';
import 'animate.css';
import './Home.css'
import CategoryData from '../CategoryData';
import useTitle from '../../../hooks/useTitle';

const Home = () => {

    useTitle("Home")

    const [datas, setDatas] = useState([])
    const [allCategory, setAllCategory] = useState([])

    useEffect(() => {
        const fetchFunction = async () => {
            const res = await fetch(`https://game-on-new-server.vercel.app/category`);
            const data = await res.json();
            setDatas(data);
            setAllCategory(data[0]?.product)
        }
        fetchFunction();
    }, [])


    return (
        <div className='mt-10 bg-black pt-8 pb-32'>

            <div className='bgImg height flex items-center flex-col shadow-inner shadow-black'>
                <h1 data-aos="fade-down" className='text-6xl font-bold text-white text-center mt-36 animate__animated animate__fadeInDown'><span className='text-orange-400'>Explore </span>the gaming world <br /> with <span className='text-orange-400'>Game On</span></h1>
                <p className='text-gray-400 mt-5 mx-40 text-center animate__animated animate__fadeInUp'>Discover a world of gaming excellence at our online store. We offer a vast selection of top-quality gaming products, from consoles and accessories to the latest game releases. Browse our user-friendly website and find the perfect gear to enhance your gaming experience. With secure payment options and fast shipping, we're your go-to destination for all your gaming needs. Elevate your play today!</p>
                <Link to="/all-products" className='btn rounded-full mt-20 normal-case bg-orange-400 hover:bg-orange-600 w-60 text-lg font-bold animate__animated animate__fadeInUp'>Check Our All Products</Link>
            </div>

            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h1 className='text-5xl font-bold text-white text-center mt-24'>Watch our all categories <br /> in this <span className='text-orange-400'>gallery</span></h1>
                <p className='text-gray-400 mt-5 text-center mx-40'>Watch out for the latest gaming products! Explore a wide range of categories to enhance your gaming experience. Discover powerful gaming laptops, high-performance gaming consoles, immersive virtual reality headsets, cutting-edge gaming accessories, and innovative gaming peripherals. Stay ahead of the game with these must-have products!</p>
            </div>

            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="h-screen mt-16 flex justify-center mx-12 relative">
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

            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h1 className='text-center text-5xl text-white font-bold mt-10'>Shop by <span className='text-orange-400'>category</span></h1>
                <p className='text-gray-400 mt-5 text-center mx-40'>Discover an extensive range of gaming products at our online shop. Immerse yourself in thrilling gameplay with high-performance gaming consoles, cutting-edge accessories, and immersive virtual reality experiences. Stay ahead of the competition with the latest releases and enhance your gaming setup with top-notch equipment. Shop now for an unparalleled gaming experience.</p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='grid grid-cols-6 mx-24 gap-10 mt-16'>
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

            <div className='bgImg2 mt-20 flex flex-col justify-center items-center'>
                <h1
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className='text-6xl mt-10 font-bold text-white'><span className='text-orange-400'>Join</span> With Us</h1>
                <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    className='text-gray-200 mt-5 mx-40 text-center animate__animated animate__fadeInUp'>Discover a world of gaming excellence at our online store. We offer a vast selection of top-quality gaming products, from consoles and accessories to the latest game releases. Browse our user-friendly website and find the perfect gear to enhance your gaming experience. With secure payment options and fast shipping, we're your go-to destination for all your gaming needs. Elevate your play today!</p>
                <Link
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                    to="/login" className='btn mt-16 normal-case rounded-full bg-orange-400 hover:bg-orange-600 w-60 text-lg font-bold animate__animated animate__fadeInUp'>Join</Link>
            </div>

            <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h1 className='text-center text-4xl text-white font-bold mt-20'>Frequently asked <span className='text-orange-400'>questions</span></h1>
                <p className='text-gray-400 mx-40 text-center mt-5'>Here we emplement some frequently asked questions. You can check this questions and the answers. If you have any other questions or if you want to know more about us then please check the about page or contact with us.</p>
            </div>
            <Accordion
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='mx-24 mt-10'>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        How to order?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <span className='text-black font-bold text-2xl'>Order</span>
                            <br /><br />
                            1. Find the desired product: Browse the website or use the search function to locate the specific product you want to order.
                            <br /><br />
                            2.                Read product details: Review the product description, specifications, price, and any other relevant information provided on the product page. Make sure it meets your requirements.
                            <br /><br />
                            3.                Add to cart: If you decide to purchase the product, click on the "Add to Cart" or similar button. This action adds the item to your virtual shopping cart.
                            <br /><br />
                            4.                Review your cart: Navigate to your shopping cart, usually accessible via a shopping cart icon or a dedicated page. Check that the correct product is in your cart and review the quantity.
                            <br /><br />
                            5.                Proceed to checkout: Click on the "Checkout" or similar button to initiate the ordering process. At this stage, you may be asked to create an account or log in if you don't already have one.
                            <br /><br />
                            6.                Provide shipping information: Enter the shipping address where you want the product to be delivered. Ensure accuracy to avoid any delivery issues.
                            <br /><br />
                            7.                Select shipping method: Choose your preferred shipping method if multiple options are available. Consider factors like speed, cost, and any additional services offered.
                            <br /><br />
                            8.                Review order summary: Confirm the product, quantity, shipping address, and shipping method are accurate. Take note of the total order cost, including taxes and shipping fees.
                            <br /><br />
                            9.                Provide payment details: Enter your payment information, such as credit card details or use alternative payment methods like PayPal. Follow the provided instructions to complete the transaction securely.
                            <br /><br />
                            10.                Place the order: Click the "Place Order" or similar button to finalize your purchase. At this point, you may receive an order confirmation email with details of your purchase.
                            <br /><br />
                            11.                Track your order: If available, take note of any order tracking number or link provided. It will help you monitor the shipment progress and estimated delivery date.
                            <br /><br />
                            12.                Await delivery: Wait for the product to be shipped and delivered to your specified address. Refer to the provided tracking information for updates on the delivery status.
                            <br /><br />
                            13.                Remember to familiarize yourself with the website's return policy in case you need to return or exchange the product.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Our Warrenty policy?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <span className='text-black font-bold text-2xl'>Warranty policy</span>
                            <br /><br />
                            To claim a warranty, you should follow these general steps:
                            <br /><br />
                            1. Review the warranty policy: Before making a claim, review the warranty policy to ensure that the issue you're experiencing is covered and that you meet all the requirements and conditions for making a claim.
                            <br /><br />
                            2. Contact the manufacturer or seller: Contact the manufacturer or seller of the product to inform them of the issue and initiate the warranty claim. You can usually find contact information on the manufacturer's website or on the product packaging.
                            <br /><br />
                            3. Provide proof of purchase: In most cases, you will need to provide proof of purchase, such as a receipt or order confirmation, to make a warranty claim. Make sure you have this information available.
                            <br /><br />
                            4. Provide information about the issue: You will need to provide information about the issue you're experiencing with the product, including when it started, how it occurred, and any other relevant details.
                            <br /><br />
                            5. Follow the manufacturer's instructions: The manufacturer will provide instructions on how to proceed with the warranty claim, which may include returning the product, providing photographic evidence of the issue, or taking it to an authorized repair center.
                            <br /><br />
                            6. Wait for a response: The manufacturer will review your claim and determine whether it's covered under the warranty. If so, they will either repair or replace the product, or provide a refund or credit.
                            <br /><br />
                            It's important to be patient throughout the process and follow the manufacturer's instructions carefully. If you have any questions or concerns, don't hesitate to ask the manufacturer or seller forclarification or assistance.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Product return policy?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <span className='text-black font-bold text-2xl'>Return policy</span>
                            <br />
                            <br />

                            Returning a product without a receipt can be challenging, but there are a few things you can try:
                            <br /><br />
                            1. Contact the store: If you purchased the item from a physical store, try contacting the store directly. They may be able to look up your purchase in their system using your credit or debit card information, loyalty program account, or other identifying information.
                            <br /><br />
                            2. Check your email: If you made the purchase online, check your email for the order confirmation or shipping notification. Some stores allow you to use that as proof of purchase when returning an item.
                            <br /><br />
                            3. Provide other evidence of purchase: If you don't have a receipt or email confirmation, you may be able to provide other evidence of purchase, such as a bank statement or a photo of the item's serial number or barcode.
                            <br /><br />
                            4. Be prepared for store credit: If the store is unable to verify your purchase, they may offer you a store credit instead of a refund.
                            <br /><br />
                            It's always a good idea to check the store's return policy before attempting to return an item, especially if you don't have a receipt. Some stores have stricter policies for returns without a receipt, so it's best to be informed before you make the trip.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        How to change or cancel order?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <span className='text-black font-bold text-2xl'>Change or cancel order</span>
                            <br /><br />
                            1.                     Check the company's cancellation or modification policy: Look for information on their website or in the confirmation email you received after placing the order. Pay attention to any time limits or fees associated with changes or cancellations.
                            <br /><br />
                            2.                Contact customer support: Reach out to the company's customer support via phone, email, or live chat. Provide them with your order details and explain that you would like to change or cancel your order. Be prepared with any relevant information, such as order number, item details, and your reason for the change or cancellation.
                            <br /><br />
                            3.                Follow the instructions provided: Customer support will guide you through the process. They may be able to make the changes immediately or assist you with canceling the order. If necessary, they may provide you with a return label or instructions for returning the items if they have already been shipped.
                            <br /><br />
                            4.                Act within the given timeframe: If you want to change or cancel your order, it's crucial to act promptly, as many companies have specific timeframes for modifications or cancellations.
                            <br /><br />
                            5.                Check your refund or exchange options: Once the change or cancellation is processed, inquire about any refund or exchange options available to you. Some companies may offer full refunds, while others may deduct fees or provide store credit instead.
                            <br /><br />
                            Remember, specific procedures and policies can vary among different online retailers, so it's always advisable to review the company's terms and conditions or contact their customer support for guidance in your particular situation.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='bg-orange-400 text-black font-bold hover:bg-orange-500'>
                        Our payment method?
                    </Accordion.Title>
                    <Accordion.Content className='bg-white'>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <span className='text-black font-bold text-2xl'>Payment method</span>
                            <br /><br />
                            1.                Add items to your shopping cart: Browse the website and select the items you wish to purchase by clicking on the "Add to Cart" or similar buttons.
                            <br /><br />
                            2.                Review your shopping cart: Once you have added all the desired items, click on the shopping cart icon or a similar button to review your selected products and their quantities.
                            <br /><br />
                            3.                Proceed to checkout: Click on the "Checkout" or "Proceed to Checkout" button to begin the payment process.
                            <br /><br />
                            4.                Provide shipping information: Enter your shipping address, including your name, address, city, state, ZIP code, and contact details. Some websites may offer saved addresses if you have previously shopped with them.
                            <br /><br />
                            5.                Select a payment method: Choose the payment method you prefer. Common options include credit or debit cards, online payment services (such as PayPal or Stripe), digital wallets (like Apple Pay or Google Pay), or bank transfers. Select the appropriate option and proceed.
                            <br /><br />
                            6.                Enter payment details: Provide the required payment information based on the chosen method. This typically includes the card number, expiration date, CVV code, and billing address. If using online payment services or digital wallets, you may need to log in to your account and authorize the transaction.
                            <br /><br />
                            7.                Review and confirm the order: Verify that the order details, including the items, quantities, shipping address, and payment information, are correct. If everything looks accurate, proceed to confirm the order.
                            <br /><br />
                            8.                Complete the payment: Depending on the chosen payment method, you may be redirected to a secure payment gateway or prompted to authorize the payment through your selected service or digital wallet. Follow the instructions provided to complete the payment.
                            <br /><br />
                            9.                Receive confirmation: After the payment is successfully processed, you will typically receive an order confirmation page on the website, as well as a confirmation email with the details of your purchase. Keep this information for future reference.
                            <br /><br />
                            It's important to note that specific steps and options may vary slightly between different e-commerce websites. Always ensure that the website is reputable and secure before providing any personal or payment information.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Home;