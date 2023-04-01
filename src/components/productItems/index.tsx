// Libraries
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
// REST
import { getProductsAsync } from '../../redux/products/services';
// Icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// Component
import ProductItem from '../productItem';
import LoadingScreen from '../loadingScreen';
import { setItemOffset } from '../../redux/basket/basketSlice';

const ProductItems = () => {

    // All Products 
    const products = useSelector((state: RootState) => state.product.products);
    // isLoading state
    const isLoading = useSelector((state: RootState) => state.product.isLoading);

    const itemOffset = useSelector((state: RootState) => state.basket.itemOffset)


    // number of items to be displayed per page
    const itemsPerPage = 16;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const dispatch = useDispatch<AppDispatch>();


    // When page is loaded than we will get all products
    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch])

    // When we click one of the page actions than this function will work
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        dispatch(setItemOffset(newOffset))
    };


    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center my-8 gap-10'>
                {isLoading && <LoadingScreen />}

                {!isLoading && currentItems?.map((item, index) => (
                    <ProductItem key={index} item={item} />
                ))}

            </div>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                nextLabel=<GrFormNext />
                previousLabel=<GrFormPrevious />
            />
        </>
    );
}

export { ProductItems }