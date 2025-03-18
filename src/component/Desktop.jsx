import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Desktop = () => {
    const allData = useLoaderData();
    const [desktops, setDesktops] = useState([]);
    useEffect(() => {
        const allDesktop = allData.filter(data => data.category.toLowerCase() === 'desktop');
        setDesktops(allDesktop)
    }, [allData])

    return (
        <div className="gap-6">

            {
                desktops.map(desktop=><Card key={desktop.category} data={desktop}> </Card>)
            }
        </div>
    );
};

export default Desktop;
