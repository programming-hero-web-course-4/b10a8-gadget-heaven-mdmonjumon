import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Smartwatch = () => {
    const allData = useLoaderData();
    const [smartwatch, setSmartwatch]= useState([])

    useEffect(()=>{
        const allAccessories = [...allData].filter(data=>data.category.toLowerCase() === 'smartwatch');
        setSmartwatch(allAccessories);

    },[allData])

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                smartwatch.map(smartwatch=> <Card data={smartwatch}></Card>)
            }
        </div>
    );
};

export default Smartwatch;