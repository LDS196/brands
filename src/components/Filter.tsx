import React, {ChangeEvent, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeStatusBrand, clearFilteredBrands, setBrand, setBrands, setCurrentPage,
} from "components/Redux/Slices/FilterSlice";
import {filterItems} from "components/Redux/Slices/ProdutsSlice";
import {RootState} from "components/Redux/Store";
import {brands} from "assets/brands";


export const Filter = React.memo(() => {

    const dispatch = useDispatch()
    const list = useSelector((state: RootState) => state.filter.brands)
    const [isVisible, setIsVisible] = React.useState(false)
    const filteredIdBrands = useSelector((state: RootState) => state.filter.filteredIdBrands)
    const filterRef = useRef(null)
    const onChangeHandler = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        const status = e.currentTarget.checked
        dispatch(changeStatusBrand({id, status}))
        dispatch(setBrand({id, status}))
    }

    const onClickHandlerApply = () => {
        dispatch(setCurrentPage(1))
        dispatch(filterItems(filteredIdBrands))
        changeIsVisible()
    }

    const onClickHandlerResetFilter = () => {
        dispatch(clearFilteredBrands())
        dispatch(changeStatusBrand({status: false}))
        dispatch(filterItems([]))
        changeIsVisible()
    }
    const changeIsVisible = () => {
        setIsVisible((prevState) => !prevState)
    }

    useEffect(() => {
        dispatch(setBrands(brands))
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (filterRef.current) {
                if (!e.composedPath().includes(filterRef.current)) {
                    setIsVisible(isVisible)
                }
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const listForRender = list.map(l => {
        return <li key={l.id}>
            <input
                checked={l.status}
                id={String(l.id)}
                type={"checkbox"}
                onChange={(e) => onChangeHandler(l.id, e)}
            />
            <label htmlFor={String(l.id)}> {l.title}</label>

        </li>
    })
    return (
        <div className="filter" ref={filterRef}>
            <p className="filter__label"
               onClick={changeIsVisible}>
                <b>Choose Brands</b>
                <span>
                    <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                </span>
            </p>
            {
                isVisible && <div className="filter__popup">
                    <ul>
                        {listForRender}
                    </ul>
                    <div className={'filter__buttons'}>
                        <button className="button button--outline button--add" onClick={onClickHandlerApply}>Применить</button>
                        <button className="button button--outline button--add" onClick={onClickHandlerResetFilter}>Сбросить</button>

                    </div>
                </div>

            }


        </div>
    )
})
