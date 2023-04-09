// React Libraries
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Redux Types
import { AppDispatch, RootState } from "../../redux/store";
// Api calls
import { getProductByIdAsync } from '../../redux/products/services';
// Api actions
import AddToBasketButton from '../../components/addToBasketButton';
// Components
import ImageSlider from '../../components/imageSlider';

const ProductDetailContainer = () => {

    // This is give us id paramater
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>()

    // This is give us clicked (current) product
    const currentProduct = useSelector((state: RootState) => state.product.currentProduct);

    // Get product by id when page is load and if it's  dispatch
    useEffect(() => {
        if (id) {
            dispatch(getProductByIdAsync(id));
        }
    }, [dispatch, id]);


    return (
        <div className='flex max-w-[1300px] my-4 md:flex-row flex-col xl:px-0 gap-y-9 px-3 m-auto gap-x-12 md:min-h-screenSize min-h-mobileScreenSize items-center'>
            {currentProduct &&
                <>
                    <ImageSlider currentProduct={currentProduct} />
                    <div className='flex-1 flex flex-col justify-center md:mb-0 mb-10'>
                        <div className='text-[clamp(30px,3.6923vw,48px)] font-bold text-veryDarkBlue dark:text-white mb-8'>
                            {currentProduct?.title}
                        </div>
                        <div className='text-darkGrayishBlue dark:text-grayishBlue tracking-[0.5px] mb-4 text-[clamp(14px,1.2307vw,16px)]'>
                            {currentProduct?.description && currentProduct?.description}
                        </div>
                        <div className='text-[clamp(20px,2.3076vw,30px)] dark:text-white font-bold mb-8'>
                            {currentProduct?.price} TL
                        </div>
                        <div className='flex gap-x-4 sm:flex-row flex-col sm:items-stretch gap-y-4 items-start'>
                            <AddToBasketButton item={currentProduct} />
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default ProductDetailContainer