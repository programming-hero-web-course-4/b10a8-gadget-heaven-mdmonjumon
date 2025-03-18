import { RiDeleteBin6Line } from "react-icons/ri";

const DisplayCart = ({ product, status, handleRemoveItem}) => {

    const {
        product_title,
        product_image,
        price,
        description,
        product_id
    } = product;


    return (
        <div className="space-y-5 bg-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="space-y-5 flex flex-col md:flex-row items-center gap-3">

                <img className="max-w-52 max-h-28 size-full object-cover" src={product_image} alt={product_image} />

                <div className="space-y-2">
                    <h2 className="font-semibold text-2xl">{product_title}</h2>
                    <p className="text-lg text-[#09080F99]">{description}</p>
                    <p><span className="font-semibold text-xl text-[#09080FCC]">Price: ${price}</span></p>
                </div>
            </div>


            <div onClick={() => handleRemoveItem(product_id, status)}
                className="flex justify-center text-4xl text-purple-400 border-3 p-3 rounded-full inset-shadow-[#9538E2] cursor-pointer hover:border-red-500 hover:text-red-500 ">
                <RiDeleteBin6Line />
            </div>

        </div>
    );
};

export default DisplayCart;

