const getStoredCard = () =>{
    const storedCartString = localStorage.getItem('cart-list');
    if(storedCartString){
        const getStored= JSON.parse(storedCartString);
        return getStored;
    }
    else{
        return [];
    }
}

const addToLS = (id) =>{
    const storedCart = getStoredCard();
    storedCart.push(id);
    const storedCartStr = JSON.stringify(storedCart);
    localStorage.setItem('cart-list', storedCartStr);
}



export{addToLS, getStoredCard}

