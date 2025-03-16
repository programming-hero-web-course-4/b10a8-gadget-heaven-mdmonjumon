import { useLoaderData } from "react-router-dom";
import Heading from "../component/Heading";
import { useEffect, useState } from "react";
import Cart from "../component/Cart";
import Wishlist from "../component/Wishlist";
import { getStoredCard } from "../utility/utility";

const Dashboard = () => {
    const allData = useLoaderData()

    const [cart, setCart] = useState([])

    

    useEffect(()=>{
        const getCartData = getStoredCard();
        setCart(allData.filter(product=>getCartData.includes(product.product_id)));
       
        

    },[allData])

    console.log(cart);
   

    const [activeButton, setActiveButton] = useState('cart')

    const handleActiveButton = (status) => {
        setActiveButton(status)
    }

    return (
        <div>
            <section className="bg-[#9538E2] py-10">
                <Heading
                    heading={'Dashboard'}
                    intro={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                    activeButton={activeButton}
                    handleActiveButton={handleActiveButton}
                ></Heading>
            </section>


            <section className="max-w-7xl mx-auto">
                {
                    activeButton === 'cart'? <Cart cartData={cart}></Cart> : <Wishlist></Wishlist>
                }
            </section>

        </div>
    );
};

export default Dashboard;