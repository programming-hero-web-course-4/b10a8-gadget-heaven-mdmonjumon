import { Link, useLocation } from "react-router-dom";

const Heading = ({ heading, intro, handleActiveButton, activeButton }) => {

    const { pathname } = useLocation();
   


    return (
        <div className='space-y-10'>
            <h2 className="font-bold text-2xl md:text-5xl text-[#FFFFFF] text-center md:max-w-5xl mx-auto">{heading}</h2>
            <p className="text-[#FFFFFF] text-center md:max-w-3xl mx-auto">{intro}</p>

            {
                pathname === "/" ? <div className="flex justify-center">
                    <Link to={'/dashboard'}><button className="px-8 py-4 bg-[#FFFFFF] rounded-full font-bold text-xl text-[#9538E2]">Shop Now</button></Link>
                </div> : ''
            }

            {
                pathname === "/dashboard" ? <div className="flex gap-5 justify-center items-center">
                    <button onClick={()=>handleActiveButton('cart')}
                        className={ `px-12 py-4 rounded-full font-bold text-xl border-2 border-white ${activeButton==='cart'? 'bg-white text-[#9538E2]':' text-white bg-transparent'}`}
                    > Cart</button>

                    <button onClick={()=>handleActiveButton('wishlist')}
                       className={ `px-12 py-4 rounded-full font-bold text-xl border-2 border-white ${activeButton==='wishlist'? 'bg-white text-[#9538E2]':' text-white bg-transparent'}`}
                    > Wishlist</button>
                </div> : ''
            }

        </div>
    );
};

export default Heading;