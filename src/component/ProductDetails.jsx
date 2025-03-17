
import Heading from './Heading';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { LuHeart } from 'react-icons/lu';
import { addToLS, addWishlistToLS, getStoredCard, getStoredWishlistCart } from '../utility/utility';



const ProductDetails = () => {

    const { Id } = useParams();
    const data = useLoaderData()
    const singleData = data.find(data => data.product_id === parseInt(Id))
    const {
        product_title,
        product_image,
        price,
        description,
        Specification,
        availability,
        rating,
        product_id
    } = singleData;


    const { setCartLength , setWishlistLength} = useOutletContext();

    //add to cart start here
    const handleAddToCart = id => {
        addToLS(id)
        setCartLength(getStoredCard().length)
    }
    //add to cart end here


    //  Add to wishlist start here
    const handleAddToWishlist = id => {
        addWishlistToLS(id)
        setWishlistLength(getStoredWishlistCart().length)
    }
    //  Add to wishlist end here

    

    return (
        <div className='bg-[#F7F7F7] pb-6 lg:pb-96'>

            <div className='bg-[#9538E2] pt-10 pb-14 lg:pb-56 md:mb-20  lg:relative'>
                <Heading
                    heading='Product Details'
                    intro='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                ></Heading>
            </div>


            <div className="lg:card space-y-10 lg:space-y-0 lg:card-side lg:justify-center gap-5 lg:items-center p-6 rounded-2xl bg-[#FFFFFF] lg:absolute left-1/2 transform lg:-translate-x-1/2 top-80">
                <figure className='max-w-[500px]'>
                    <img className='size-full object-cover rounded-2xl'
                        src={product_image}
                        alt={product_image} />
                </figure>
                <div className='space-y-5'>
                    <h2 className="card-title">{product_title}</h2>
                    <p><span className="text-xl text-[#09080F99] font-medium"><span className="text-black">Price:</span> $ {price} </span></p>
                    {
                        availability ?
                            <p className='font-medium text-[#309C08] px-4 py-2 border border-[#309C08] rounded-full w-fit bg-[#309C081A]'>In Stock</p>
                            : <p className='font-medium text-warning px-4 py-2 border rounded-full w-fit bg-[#309C081A]'>Out of Stock</p>
                    }
                    <p className='font-normal text-lg text-[#09080F99]'>{description}</p>
                    <p><span className='font-bold text-lg'>Specification:</span></p>

                    <ol className='list-decimal text-[#09080F99] text-lg font-normal pl-5'>
                        {
                            Specification.map((spec, idx) => <li key={idx}>{spec}</li>)
                        }
                    </ol>

                    <p><span className='font-bold text-lg'>Rating⭐</span></p>

                    <div className='flex items-center gap-3'>
                        <ReactStars
                            size={30}
                            count={5}
                            value={rating}
                        ></ReactStars>

                        <span className='text-xl'>{rating}</span>
                    </div>


                    <div className="card-actions justify-start">

                        <button onClick={() => handleAddToCart(product_id)}
                            className={`font-bold text-lg text-white bg-[#9538E2] px-5 py-2 rounded-full flex items-center gap-3 cursor-pointer`}>Add To Card

                            <HiOutlineShoppingCart className='text-xl' />
                        </button>



                        <button onClick={() => handleAddToWishlist(product_id)} className="p-3 border border-[#0B0B0B1A] rounded-full bg-white cursor-pointer"><LuHeart /> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;