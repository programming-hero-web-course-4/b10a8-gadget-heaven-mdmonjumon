import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Laptop = () => {
    const allData = useLoaderData();
    const [laptops, setLaptops]= useState([])

    useEffect(()=>{
        const allLaptops = [...allData].filter(data=>data.category.toLowerCase() === 'laptop');
        setLaptops(allLaptops);

    },[allData])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                laptops.map(laptop=> <Card key={laptop.product_id} data={laptop}></Card>)
            }
        </div>
    );
};

export default Laptop;