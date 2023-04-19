import React from 'react';
import {ProductBlock} from "components/ProductBlock/ProductBlock";
import {Sort} from "components/Sort";
import {Pagination} from "components/Pagination/Pagination";
import {setCurrentPage} from "components/Redux/Slices/FilterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "components/Redux/Store";


import {Filter} from "components/Filter";


const Home = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state: RootState) => state.filter.currentPage)
    const filteredItems = useSelector((state: RootState) => state.products.filteredItems)

    const onChangePage = (value: number) => dispatch(setCurrentPage(value))
    const pageSize = 6

    const productsForRender = filteredItems
        .map((p) => <ProductBlock key={p.id} {...p}/>)
        .slice((pageSize* currentPage - pageSize),(pageSize* currentPage))

    return (
        <div className="container">
            <div className="content__top">
                <Filter/>
                <Sort/>
            </div>
            <h2 className="content__title">All Brands</h2>
            <div className="content__items">
                {productsForRender}
            </div>
            <Pagination currentPage={currentPage} onChange={onChangePage}/>
        </div>

    );
};

export default Home;