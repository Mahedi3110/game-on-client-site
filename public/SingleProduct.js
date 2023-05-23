const SingleProduct = async () => {
    const res = await fetch(`https://game-on-new-server.vercel.app/category`);
    const datas = await res.json();

    const allData = [];
    for (const data of datas) {
        const allProducts = data.product
        for (const product of allProducts) {
            allData.push(product)
        }
    }
    return allData;
};



export default SingleProduct;