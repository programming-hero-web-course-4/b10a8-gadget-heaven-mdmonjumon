import { useLoaderData, useOutletContext } from "react-router-dom";
import Heading from "../component/Heading";
import { useEffect, useState } from "react";
import Cart from "../component/Cart";
import Wishlist from "../component/Wishlist";
import { getStoredCard, getStoredWishlistCart } from "../utility/utility";

const Dashboard = () => {
    const allData = useLoaderData()

    const { setCartLength , setWishlistLength} = useOutletContext();

    // For cart component start here
    const [cart, setCart] = useState([])

    useEffect(() => {
        const getCartData = getStoredCard();
        setCart(allData.filter(product => getCartData.includes(product.product_id)));
    }, [allData])

    // For cart component end here


    // For wishlist component start here
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        const getWishlistData = getStoredWishlistCart()
        setWishlist(allData.filter(product => getWishlistData.includes(product.product_id)))
    }, [allData])
    // For wishlist component end here


    // remove data from local storage for cart and wishlist start here)
    const handleRemoveItem = (productId, status) => {
        if (status === 'cart') {
            const storedCart = getStoredCard();
            const remainingCartData = storedCart.filter(id => id !== productId);
            const remainingCartDataStr = JSON.stringify(remainingCartData);
            localStorage.setItem('cart-list', remainingCartDataStr);
            setCart(allData.filter(product => remainingCartData.includes(product.product_id)));
            setCartLength(remainingCartData.length)
            
        }
        else {
            const storedWishlist = getStoredWishlistCart();
            const remainingWishlistData = storedWishlist.filter(id => id !== productId);
            const remainingWishlistDataStr = JSON.stringify(remainingWishlistData);
            localStorage.setItem('wish-list', remainingWishlistDataStr);
            setWishlist(allData.filter(product => remainingWishlistData.includes(product.product_id)));
            setWishlistLength(remainingWishlistData.length)

        }
    }
    // remove data from local storage for cart and wishlist end here)

    // sort by Price start here

    const handleSortByPrice = () => {
        const descendingSort = [...cart].sort((a, b) => b.price - a.price);
        setCart(descendingSort);
    }
    // sort by Price end here


    const [activeButton, setActiveButton] = useState('cart')

    const handleActiveButton = (status) => {
        setActiveButton(status);
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
                    activeButton === 'cart' ?
                        <Cart cartData={cart} handleRemoveItem={handleRemoveItem} handleSortByPrice={handleSortByPrice} setCart={setCart} ></Cart>
                        : <Wishlist wishlistData={wishlist} handleRemoveItem={handleRemoveItem}></Wishlist>
                }
            </section>

        </div>
    );
};

export default Dashboard;