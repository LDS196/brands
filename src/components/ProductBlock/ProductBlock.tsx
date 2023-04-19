import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../Redux/Slices/CartSlice";
import {RootState} from "../Redux/Store";
import {ProductType} from "assets/products";


export const ProductBlock: React.FC<ProductType> = (props) => {

    const {type,id, sku,title,regular_price,image,brand} = props
    const cartItem = useSelector((state: RootState) => state.cart.items.find(el => el.id === id))
    const dispatch = useDispatch()
    const onClickAdd = () => {
    const item = {type,id, sku,title,regular_price,image,brand, count:0}
        dispatch(addItem(item))
    }
    const addedCount = cartItem ? cartItem.count : 0

    return (
        <div className={'pizza-block-wrapper'}>
            <div className="pizza-block">
                <img
                    className="pizza-block__image"
                    src={image} alt="product"
                />
                <h4 className="pizza-block__title">{title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        Type:{type}
                    </ul>
                    <ul>
                        Id:{id}
                    </ul>
                    <ul>
                        Sku:{sku}
                    </ul>
                    <ul>
                        Currency:{regular_price.currency}
                    </ul>
                    <ul>
                        Value:{regular_price.value}
                    </ul>
                    <ul>
                        Brand:{brand}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">{regular_price.value} $</div>
                    <button
                        onClick={onClickAdd}
                        className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </button>
                </div>
            </div>
        </div>

    )
}