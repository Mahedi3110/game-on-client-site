const SoloProduct = async () => {
    const res = await fetch(`http://localhost:7000/addList`);
    const datas = await res.json();

    const allData = [];
    for (const data of datas) {
        allData.push(data)
    }
    return allData;
};



export default SoloProduct;