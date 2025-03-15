import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import Heading from "../component/Heading";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {

    const data=useLoaderData()

    // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]
    return (
        <div>
            <section className="bg-[#9538E2] py-20">
                <Heading
                    heading='Statistics'
                    intro='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'

                ></Heading>
            </section>

            <section className="max-w-7xl mx-auto p-5">
                <h2 className="font-bold text-2xl my-8">Statistics</h2>


                <div className="hidden lg:flex justify-center">

                    <BarChart width={1200} height={700} data={data}  margin={{ bottom: 250 }} >
                        <XAxis dataKey="product_title" angle={90} textAnchor= "start"/>
                        <YAxis/>
                        <Tooltip></Tooltip>
                        <Bar dataKey="price" barSize={25} fill="#8884d8"/>
                    </BarChart>
                </div>
            </section>
        </div>
    );
};

export default Statistics;