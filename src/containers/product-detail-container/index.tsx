// React Libraries
import { useEffect, useState } from 'react';
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

const ProductDetailContainer = () => {

    // This is give us id paramater
    const { id } = useParams();

    const dispatch = useDispatch<AppDispatch>()

    // This is give us clicked (current) product
    const currentProduct = useSelector((state: RootState) => state.product.currentProduct);

    // Which image is clicked, we will define the index number of that image in this state
    const [clickedItem, setClickedItem] = useState<number>(0)

    const [imagesLength, setImagesLength] = useState<boolean>()


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

    // When we click the each image than this will work and we get the index of the image and we will show it 
    const showClickedItem = (index: number) => {
        const getAllImages = document.querySelectorAll(".detail-image");
        getAllImages.forEach((item) => {
            item.classList.remove("active")
        })

        getAllImages[index].classList.add("active");
        setClickedItem(index);
    }

    // Get product by id when page is load and if it's  dispatch
    useEffect(() => {
        dispatch(getProductByIdAsync(Number(id)));
    }, [dispatch, id]);


    // When product is come, we will add an active class to first image
    useEffect(() => {
        const getAllImages = document.querySelectorAll(".detail-image");
        getAllImages.forEach((item) => {
            item.classList.remove("active")
        })
        getAllImages[clickedItem || 0]?.classList.add("active")

        if (currentProduct?.images && currentProduct.images?.length > 0) {
            setImagesLength(true)
        }

        if (currentProduct?.images && currentProduct.images?.length <= 0) {
            setImagesLength(false)
        }

    }, [currentProduct])

    return (
        <div className='flex max-w-[1300px] m-auto gap-x-12 min-h-screenSize items-center'>
            {currentProduct &&
                <>

                    <div className='flex-1 flex flex-col items-center'>
                        <div className='w-96 mb-8'>
                            {imagesLength &&
                                <img src={currentProduct.images && currentProduct.images[clickedItem]?.sub_image} alt="Product" />
                            }
                            {!imagesLength &&
                                <img src={currentProduct.main_image} alt="Product" />
                            }
                        </div>
                        <div className='flex w-full justify-center gap-x-4'>
                            {currentProduct?.images?.map((item, index) => (
                                <button onClick={() => showClickedItem(index)} className='detail-image' key={index}>
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