import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Accessories = () => {
    const allData = useLoaderData();
    const [accessories, setAccessories]= useState([])

    useEffect(()=>{
        const allAccessories = [...allData].filter(data=>data.category.toLowerCase() === 'accessories');
        setAccessories(allAccessories);

    },[allData])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                accessories.map(accessory=> <Card key={accessory.product_id} data={accessory}></Card>)
            }
        </div>
    );
};

export default Accessories;