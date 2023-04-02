// React Libraries
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Icons
import { FaMinus, FaPlus } from 'react-icons/fa'
// Redux Types
import { AppDispatch, RootState } from "../../redux/store";
import { IProducts } from '../../@types/ProductTypes';
// Api calls
import { getProductByIdAsync, updateProductCountAsync } from '../../redux/products/services';
// Api actions
import AddToBasketButton from '../../components/addToBasketButton';
import { addProductToBasketAsync, removeFromBasketAsync } from '../../redux/basket/service';
// Components
import ImageSlider from '../../components/imageSlider';

const ProductDetailContainer = () => {

    // This is give us id paramater
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>()

    // This is give us clicked (current) product
    const currentProduct = useSelector((state: RootState) => state.product.currentProduct);


    // Product count is increment
    const incrementCount = async (item: IProducts) => {
        // if count is 0 and we click the increment button than it will throw it to basket
        if (item?.count === 0) {
            await dispatch(addProductToBasketAsync(item));
        }

        await dispatch(updateProductCountAsync({ id: Number(id), count: item?.count + 1 }))
        await dispatch(getProductByIdAsync(Number(id)))
    }

    // Product count is decrement
    const decrementCount = async (item: IProducts) => {
        // if count is 1 and we click the decrement button than it will remove from basket
        if (item?.count === 1) {
            await dispatch(removeFromBasketAsync(item.id));
        }

        if (item?.count > 0) {
            await dispatch(updateProductCountAsync({ id: Number(id), count: item?.count - 1 }))
            await dispatch(getProductByIdAsync(Number(id)))
        }
    }

    // Get product by id when page is load and if it's  dispatch
    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)));
    }, [dispatch, id]);


    return (
        <div className='flex max-w-[1300px] my-4 md:flex-row flex-col xl:px-0 gap-y-9 px-3 m-auto gap-x-12 md:min-h-screenSize min-h-mobileScreenSize items-center'>
            {currentProduct &&
                <>
                    <ImageSlider currentProduct={currentProduct} />
                    <div className='flex-1 flex flex-col justify-center md:mb-0 mb-10'>
                        <div className='text-[clamp(30px,3.6923vw,48px)] font-bold text-veryDarkBlue mb-8'>
                            {currentProduct?.title}
                        </div>
                        <div className='text-darkGrayishBlue tracking-[0.5px] mb-4 text-[clamp(14px,1.2307vw,16px)]'>
                            {currentProduct?.description && currentProduct?.description}
                        </div>
                        <div className='text-[clamp(20px,2.3076vw,30px)] font-bold mb-8'>
                            {currentProduct?.price} TL
                        </div>
                        <div className='flex gap-x-4 sm:flex-row flex-col sm:items-stretch gap-y-4 items-start'>
                            <div className='bg-slate-200 flex items-center sm:h-auto h-9 justify-between min-w-[150px] rounded-md font-bold text-sm overflow-hidden'>
                                <button onClick={() => decrementCount(currentProduct)} className='text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                                    <FaMinus />
                                </button>
                                <span className='text-xl'>{currentProduct?.count}</span>
                                <button onClick={() => incrementCount(currentProduct)} className='text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                                    <FaPlus />
                                </button>
                            </div>
                            <AddToBasketButton item={currentProduct} />
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default ProductDetailContainer