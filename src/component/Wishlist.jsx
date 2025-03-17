
import DisplayCart from './DisplayCart';

const Wishlist = ({ wishlistData, handleRemoveItem }) => {

    return (
        <div>
            <h2 className='font-bold text-2xl mt-12'>Wishlist</h2>

            <div className='space-y-5 py-5'>
                {
                    wishlistData.map(product => <DisplayCart 
                        product={product} 
                        key={product.product_id} 
                        status='wishlist'
                        handleRemoveItem={handleRemoveItem}
                        ></DisplayCart>)
                }
            </div>
        </div>
    );
};

export default Wishlist;