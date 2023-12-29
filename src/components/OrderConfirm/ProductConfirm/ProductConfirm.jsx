import { selectAddToCart } from "../../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'

const ProductConfirm = () => {

    const dispatch = useDispatch();

    const cartProducts = useSelector(selectAddToCart);

    return (
        <div className="product-confirm">
            <ul className="product-confirm__list">
                {cartProducts.map((item) => 
                <li className="product-confirm__item" key={item.article}>
                    <div className="product-confirm__item-wrapper">
                        <img className="product-confirm__item-img" src={item.image} />
                        <div className="product-confirm__item-info">
                            <p className="product-confirm__item-name">{item.name}</p>
                            <p className="product-confirm__item-price">${item.price}</p>
                            <p className="product-confirm__item-color">{item.color}</p>
                        </div>
                    </div>
                </li>)}
                </ul>

        </div>
    )
}

export default ProductConfirm