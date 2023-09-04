import React, {useState} from "react";
import {IProduct} from "../models";

interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps){
    const [details, setDetails] = useState(false);

    const btnToggleClass = details ? 'bg-red-500' : 'bg-blue-500';
    const btnClassStyle = ["py-2 px-4 border", btnToggleClass]
    return (
        <div
        className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} className='w-1/6' alt={product.image}/>
            <p>{product.title}</p>
            {/*<p className='font-bold'>{product.price}</p>*/}
            {/*<p className="font-medium">{product.description}</p>*/}
            {/*<p className="font-extrabold">{product.category}</p>*/}
            {/*<li className='list-none'>Rating: {product.rating.rate}</li>*/}
            {/*<li className='list-none'>Count: {product.rating.count}</li>*/}
            <button
                className={btnClassStyle.join(' ')}
                onClick={() => {setDetails(prev => !prev)}}
            >
                {details ? 'hide details!' : 'show details!'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Raring: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span></p>
            </div>}

        </div>
    )
}