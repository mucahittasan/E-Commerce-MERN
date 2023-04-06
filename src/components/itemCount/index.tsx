// Libraries
import React from 'react'
import { useDispatch } from 'react-redux';
// Icons
import { FaMinus, FaPlus } from 'react-icons/fa';
// Types
import { IProducts } from '../../@types/ProductTypes';
import { AppDispatch } from '../../redux/store';
// Services
import { addProductToBasketAsync, getAllBasketItemsAsync, updateBasketItemCountAsync } from '../../redux/basket/service';

interface ItemCountProps {
    currentProduct: {
        id: number,
        loading: boolean,
        title: string,
        description?: string,
        price: number,
        category: string,
        type_of_product: string,
        count: number,
        gender?: string,
        main_image: string,
        images?: [
            {
                sub_image?: string
            }
        ] | undefined,
    }
    itemOffset?: number | undefined,
}

const ItemCount: React.FC<ItemCountProps> = ({ currentProduct }) => {

    const dispatch = useDispatch<AppDispatch>()

    // Product count is increment
    const incrementCount = async (item: IProducts) => {
        // if count is 0 and we click the increment button than it will throw it to basket
        if (item?.count === 0) {
            await dispatch(addProductToBasketAsync(item));
        }

        await dispatch(updateBasketItemCountAsync({ id: Number(item.id), count: item?.count + 1 }))
        await dispatch(getAllBasketItemsAsync())
    }

    // Product count is decrement
    const decrementCount = async (item: IProducts) => {

        if (item?.count > 0) {
            await dispatch(updateBasketItemCountAsync({ id: Number(item.id), count: item?.count - 1 }))
            await dispatch(getAllBasketItemsAsync())
        }
    }

    return (
        <>
            {currentProduct &&
                <div className='bg-slate-200 flex items-center sm:h-auto h-9 justify-between min-w-[150px] max-w-[150px] rounded-md font-bold text-[12px] overflow-hidden'>
                    <button disabled={currentProduct.count === 1} onClick={() => decrementCount(currentProduct)} className='disabled:bg-slate-200 text-primaryRed disabled:text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                        <FaMinus />
                    </button>
                    <span className='text-lg'>{currentProduct?.count}</span>
                    <button onClick={() => incrementCount(currentProduct)} className='text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                        <FaPlus />
                    </button>
                </div>
            }

        </>
    )
}

export default ItemCount