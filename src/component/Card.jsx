import { Link } from "react-router-dom";


const Card = ({ data }) => {
    const {
        product_id,
        product_title,
        product_image,
        price
    } = data;
    return (
        <div>

            {
                product_title ? <div className="card shadow-sm items-center bg-white p-5">
                    <figure>
                        <img className="rounded-lg p-3"
                            src={product_image}
                            alt={product_title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p><span className="text-xl text-[#09080F99] font-medium"><span className="text-black">Price:</span>$ {price} </span></p>
                        <div className="card-actions justify-start">
                            <Link to={`/productDetails/${product_id}`}><button
                                className="font-semibold text-lg text-[#9538E2] px-5 py-3 border shadow-[0_4px_50px_0px_rgba(11,11,11,0.15)] rounded-4xl cursor-pointer">View Details</button> </Link>
                        </div>
                    </div>
                </div>
                    :
                    <div>
                        <h2 className="text-center text-5xl font-bold">No Data Found</h2>
                    </div>
            }

        </div>
    );
};

export default Card;