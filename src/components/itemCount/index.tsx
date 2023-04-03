import React from 'react'
import { IProducts } from '../../@types/ProductTypes';
import { addProductToBasketAsync, getAllBasketItemsAsync, removeFromBasketAsync, updateBasketItemCountAsync } from '../../redux/basket/service';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { FaMinus, FaPlus } from 'react-icons/fa';

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
        // if count is 1 and we click the decrement button than it will remove from basket
        if (item?.count === 1) {
            await dispatch(removeFromBasketAsync(item.id));
        }

        if (item?.count > 0) {
            await dispatch(updateBasketItemCountAsync({ id: Number(item.id), count: item?.count - 1 }))
            await dispatch(getAllBasketItemsAsync())
        }
    }

    return (
        <>
            {currentProduct &&
                <div className='bg-slate-200 flex items-center sm:h-auto h-9 justify-between min-w-[150px] max-w-[150px] rounded-md font-bold text-sm overflow-hidden'>
                    <button onClick={() => decrementCount(currentProduct)} className='text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                        <FaMinus />
                    </button>
                    <span className='text-xl'>{currentProduct?.count}</span>
                    <button onClick={() => incrementCount(currentProduct)} className='text-primaryRed h-full w-9 flex items-center justify-center transition hover:bg-primaryRed hover:text-white'>
                        <FaPlus />
                    </button>
                </div>
            }

        </>
    )
}

export default ItemCount