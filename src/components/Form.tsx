import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "components/Redux/Store";
import {useFormik} from "formik";
import axios from "axios";
import {setStatusOrder} from "components/Redux/Slices/CartSlice";
import styles from "components/Modal/Modal.module.scss";

export const Form = memo(() => {
    const dispatch = useDispatch()

    const {totalPrice, items} = useSelector((state: RootState) => state.cart)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        onSubmit: values => {
            const order = {...values, totalPrice, items}
            let payload = JSON.stringify(order, null, 2)
            axios.post('https://app.aaccent.su/js/confirm.php', payload)
                .then((res) => {
                    if (res.data.result === 'ok') {
                        dispatch(setStatusOrder(true))
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={styles.formBlock}>
                <label htmlFor="firstName">First Name</label>
                <input
                    className={styles.input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    className={styles.input}
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="phone">Phone number</label>
                <input
                    className={styles.input}
                    id="phone"
                    name="phone"
                    type="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <div>
                    <button className="button pay-btn" type="submit">Оформить заказ</button>
                </div>

            </form>
        </div>
    );
})