import {useDispatch, useSelector} from "react-redux";
import {RootState} from "components/Redux/Store";
import styles from "components/Modal/Modal.module.scss";
import {clearItem, setStatusOrder} from "components/Redux/Slices/CartSlice";
import {Link} from "react-router-dom";
import React from "react";

export const Modal = () => {
    const statusOrder = useSelector((state: RootState) => state.cart.statusOrder)
    const dispatch = useDispatch()
    const finishClass = statusOrder ? styles.statusOrderComplete + ' ' + styles.statusOrder : styles.statusOrder
    const onClickClose = () => {
        dispatch(clearItem([]))
        dispatch(setStatusOrder(false))
    }
    return <div className={finishClass}>
        <p>Ваш заказ оформлен!</p>
        <div className="cart__bottom-buttons">
            <Link to="/" className="button button--outline button--add go-back-btn">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span onClick={onClickClose}>Закрыть</span>
            </Link>
        </div>
    </div>
}