import Heading from "../component/Heading";
import bannerImg from '../assets/banner.jpg'
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";




const Home = () => {
    const allData = useLoaderData();
    const { pathname } = useLocation()


    const [allCategory, setAllCategory] = useState([])

    useEffect(() => {
        const categories = [];
        allData.forEach(product => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        })
        setAllCategory(categories)
    }, [allData])

    return (
        <div>
            {/* banner section start */}
            <section
                className={`lg:max-w-[1540px] mx-auto border-8 border-t-0 rounded-4xl border-[#F6F6F6] bg-[#9538E2] pt-24 pb-32 md:pb-56 relative mb-56 md:mb-80 
                ${pathname === '/' ? 'rounded-t-none' : ''}`}>
                <Heading
                    heading='Upgrade Your Tech Accessorize with Gadget Heaven Accessories'
                    intro='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!' />

                <div
                    className="w-11/12 md:w-3/5 md:h-[500px] absolute top-4/5 md:top-3/4 left-1/2 transform -translate-x-1/2 border-2 border-white p-4 rounded-3xl bg-gradient-to-t from-[#ffffff] to-[#ffffff49]">
                    <img className="size-full object-cover rounded-3xl" src={bannerImg} alt="" />

                </div>

            </section>

            {/* banner section end */}




            {/* products section start */}
            <h2 className="font-bold text-2xl md:text-4xl text-center md:mt-96">Explore Cutting-Edge Gadgets</h2>

            <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-5 mt-14 pb-20">
                {/* Categories Sidebar start */}
                <aside className="flex flex-col gap-4 bg-[#FFFFFF] p-3 rounded-xl max-h-fit min-w-fit">
                    <NavLink to={'/'} className='font-medium text-lg text-[#09080F99] px-7 py-3 bg-[#09080F0D] rounded-full'>All Products</NavLink>
                    {
                        allCategory.map(category =>
                            <NavLink key={category} to={`/${category.toLowerCase()}`}
                                className={({ isActive }) => `font-medium text-lg text-[#09080F99] px-7 py-3 bg-[#09080F0D] rounded-full ${isActive ? 'bg-[#9538E2] text-white' : ''}`}
                            >{category}</NavLink>)
                    }
                </aside>
                {/* Categories Sidebar end */}


                <div>
                    <Outlet></Outlet>
                </div>
            </section>
            {/* products section start */}
        </div>
    );
};

export default Home;