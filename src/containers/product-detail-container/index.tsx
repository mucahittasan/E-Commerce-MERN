import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductByIdAsync } from '../../redux/products/services';

const ProductDetailContainer = () => {

    // This is give us id paramater
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>()

    const currentProduct = useSelector((state: RootState) => state.product.currentProduct);

    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)));
    }, [dispatch, id]);

    return (
        <div>
            {currentProduct?.title} <br />
            {currentProduct?.price} TL <br />
            {currentProduct?.description} <br />
            {currentProduct?.type_of_product}
        </div>
    )
}

export default ProductDetailContainer