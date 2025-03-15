import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Phones = () => {
    const allData = useLoaderData();
    const [phones, setPhones]= useState([])

    useEffect(()=>{
        const allPhones = [...allData].filter(data=>data.category.toLowerCase() === 'phone');
        setPhones(allPhones);

    },[allData])

    console.log(phones);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                phones.map(phone=> <Card data={phone}></Card>)
            }
        </div>
    );
};

export default Phones;