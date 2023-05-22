const SoloProduct = async () => {
    const res = await fetch(`http://localhost:7000/category`);
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



export default SoloProduct;