const SoloProduct = async () => {
    const res = await fetch(`https://game-on-new-server.vercel.app/addList`);
    const datas = await res.json();

    const allData = [];
    for (const data of datas) {
        allData.push(data)
    }
    return allData;
};



export default SoloProduct;