// Libraries
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
// REST
import { getProductsAsync } from '../../../redux/products/services';
// Components
import ProductItem from '../productItem';
import LoadingScreen from '../../features/loadingScreen';

const ProductItems = () => {

    // All Products 
    const products = useSelector((state: RootState) => state.product.products);
    // isLoading state
    const isLoading = useSelector((state: RootState) => state.product.isLoading);

    // number of items to be dis
    const dispatch = useDispatch<AppDispatch>();

    // When page is loaded than we will get all products
    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch])

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-8 gap-4'>
                {isLoading && <LoadingScreen />}

                {!isLoading && products?.map((item, index) => (
                    <ProductItem key={index} item={item} myKey={index} />
                ))}

            </div>
        </>
    );
}

export { ProductItems }