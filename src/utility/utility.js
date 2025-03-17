// add to cart start
const getStoredCard = () => {
    const storedCartString = localStorage.getItem('cart-list');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    else {
        return [];
    }
}


const addToLS = (id) => {
    const storedCart = getStoredCard();
    storedCart.push(id);
    const storedCartStr = JSON.stringify(storedCart);
    localStorage.setItem('cart-list', storedCartStr);
}
// add to cart end

// Add to wishlist start
const getStoredWishlistCart = () => {
    const storedWishlistStr = localStorage.getItem('wish-list');
    if (storedWishlistStr) {
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else {
        return [];
    }
}


const addWishlistToLS = (id) => {
    const WishlistCart = getStoredWishlistCart();
    WishlistCart.push(id);
    const WishlistCartStr = JSON.stringify(WishlistCart);
    localStorage.setItem('wish-list', WishlistCartStr);
}

// Add to wishlist end



export { addToLS, getStoredCard, getStoredWishlistCart, addWishlistToLS }

