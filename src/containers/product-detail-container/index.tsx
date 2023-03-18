import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductByIdAsync, updateProductCountAsync } from '../../redux/products/services';
import AddToBasketButton from '../../components/addToBasketButton';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IProducts } from '../../@types/ProductTypes';
import { addProductToBasketAsync } from '../../redux/basket/service';

const ProductDetailContainer = () => {

    // This is give us id paramater
    const { id } = useParams();

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    // This is give us clicked (current) product
    const currentProduct = useSelector((state: RootState) => state.product.currentProduct);

    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)));
    }, [dispatch, id]);


    const incrementCount = async (item: IProducts) => {
        if (item?.count === 0) {
            await dispatch(addProductToBasketAsync(item));
        }

        await dispatch(updateProductCountAsync({ id: Number(id), count: item?.count + 1 }))
        await dispatch(getProductByIdAsync(Number(id)))
    }

    const decrementCount = async (item: IProducts) => {
        if (item?.count > 0) {
            await dispatch(updateProductCountAsync({ id: Number(id), count: item?.count - 1 }))
            await dispatch(getProductByIdAsync(Number(id)))
        }
    }


    return (
        <div className='flex max-w-[1300px] m-auto gap-x-12'>
            {currentProduct &&
                <>

                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-96 mb-8'>
                            {currentProduct?.images &&
                                <img src={currentProduct.images[0]?.sub_image} alt="Product" />
                            }
                        </div>
                        <div className='flex w-full justify-center gap-x-4'>
                            {currentProduct?.images?.map((item, index) => (
                                <button className='detail-image' key={index}>
                                    <img className='w-full h-full object-contain' src={item.sub_image} alt="Sub photos" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col justify-center'>
                        <div className='text-5xl font-bold text-veryDarkBlue mb-8'>
                            {currentProduct?.title}
                        </div>
                        <div className='text-darkGrayishBlue tracking-[0.5px] mb-4'>
                            {currentProduct?.description && currentProduct?.description}
                        </div>
                        <div className='text-3xl font-bold mb-8'>
                            {currentProduct?.price} TL
                        </div>
                        <div className='flex gap-x-4'>
                            <div className='bg-slate-200 flex items-center justify-between min-w-[150px] rounded-md font-bold text-sm overflow-hidden'>
                                <button onClick={() => decrementCount(currentProduct)} className='text-primaryOrange h-full w-9 flex items-center justify-center transition hover:bg-primaryOrange hover:text-white'>
                                    <FaMinus />
                                </button>
                                <span className='text-xl'>{currentProduct?.count}</span>
                                <button onClick={() => incrementCount(currentProduct)} className='text-primaryOrange h-full w-9 flex items-center justify-center transition hover:bg-primaryOrange hover:text-white'>
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