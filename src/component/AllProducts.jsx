import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const AllProducts = () => {
    const data = useLoaderData();

    const [allData, setAllData] = useState([])

    const [showAll, setShowAll] = useState(true)

    const handleShowAllBtn = () => {
        setAllData(data)
        setShowAll(false)
    }

    useEffect(() => {

        setAllData([...data].slice(0, 9))
    }, [data])


    return (
        <div className="md:flex gap-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allData.map(data => <Card data={data} key={data.product_id}></Card>)
                }


                {
                    showAll && <div
                        className="col-span-3 flex justify-center">
                        <button onClick={handleShowAllBtn}
                            className="font-medium text-lg px-4 py-2 border rounded-full cursor-pointer">Show all</button></div>
                }
            </div>
        </div>
    );
};

export default AllProducts;

