
const DisplayCart = ({ product }) => {

    const {
        product_title,
        product_image,
        price,
        description
    } = product;

    return (
        <div className="space-y-5 bg-white p-8 rounded-2xl md:flex items-center gap-3">

            <img className="max-w-52 max-h-28 size-full object-cover" src={product_image} alt={product_image} />

            <div className="space-y-2">
                <h2 className="font-semibold text-2xl">{product_title}</h2>
                <p className="text-lg text-[#09080F99]">{description}</p>
                <p><span className="font-semibold text-xl text-[#09080FCC]">Price: ${price}</span></p>
            </div>
        </div>
    );
};

export default DisplayCart;