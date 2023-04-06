// React Libraries
import React, { useEffect, useState } from 'react'
// Types
import { IProducts } from '../../@types/ProductTypes'
// Components
import FavoritesButton from '../favoritesButton'
// Icons
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

type ImageSliderProps = {
    currentProduct: IProducts
}

const ImageSlider: React.FC<ImageSliderProps> = ({ currentProduct }) => {

    // clicked item = clicked item index number
    const [clickedItem, setClickedItem] = useState<number>(0)

    // Check if there is image
    const [haveImage, setHaveImage] = useState<boolean>()


    // When we click the each image than this will work and we get the index of the image and we will show it 
    const showClickedItem = (index: number) => {
        setClickedItem(index);
    }

    // Show next image
    const showNextImage = () => {
        // first we check if currentProduct length is bigger or equeal to images.length - 1
        if (currentProduct?.images?.length && clickedItem >= currentProduct?.images?.length - 1) {
            setClickedItem(0)
        } else {
            setClickedItem(prev => prev + 1);
        }
    }

    // Show prev image
    const showPrevImage = () => {
        if (clickedItem <= 0) {
            currentProduct?.images?.length &&
                setClickedItem(currentProduct?.images?.length - 1)
        } else {
            setClickedItem(prev => prev - 1);
        }
    }

    // When product is come, we will add an active class to first image
    useEffect(() => {
        const getAllImages = document.querySelectorAll(".detail-image");
        getAllImages.forEach((item) => {
            item.classList.remove("active")
        })
        getAllImages[clickedItem || 0]?.classList.add("active")

        if (currentProduct?.images && currentProduct.images?.length > 0) {
            setHaveImage(true)
        }

        if (currentProduct?.images && currentProduct.images?.length <= 0) {
            setHaveImage(false)
        }

    }, [currentProduct])

    // This is for clicked item class changing, when we click the item then it will remove all active class and
    // add an active class to clicked item
    useEffect(() => {

        const getAllImages = document.querySelectorAll(".detail-image");
        getAllImages.forEach((item) => {
            item.classList.remove("active")
        })

        getAllImages[clickedItem]?.classList.add("active");

    }, [clickedItem])

    return (
        <div className='flex-1 flex flex-col items-center relative'>
            {haveImage &&
                <button onClick={() => showPrevImage()} className='absolute top-1/2 translate-y-[-50%] md:left-0 left-[-40px] text-[clamp(18px,2.3076vw,30px)] bg-slate-200 rounded-full p-2 text-veryDarkBlue transition hover:bg-primaryRed hover:text-white'>
                    <GoChevronLeft />
                </button>
            }

            <div className='flex flex-col items-center'>
                <FavoritesButton item={currentProduct} />
                <div className='w-[clamp(270px,29.5384vw,384px)] mb-8 flex justify-center'>
                    {haveImage &&
                        <img src={currentProduct.images && currentProduct.images[clickedItem]?.sub_image} alt="Product" />
                    }
                    {!haveImage &&
                        <img src={currentProduct.main_image} alt="Product" />
                    }
                </div>
                <div className={`sm:flex w-full justify-center gap-x-4 grid ${currentProduct.images?.length && currentProduct?.images?.length >= 3 ? "grid-cols-3" : "grid-cols-2"} place-items-center gap-y-4`}>
                    {currentProduct?.images?.map((item, index) => (
                        <button onClick={() => showClickedItem(index)} className='detail-image' key={index}>
                            <img className='w-full h-full object-contain' src={item.sub_image} alt="Sub photos" />
                        </button>
                    ))}
                </div>
            </div>
            {haveImage &&
                <button onClick={() => showNextImage()} className='absolute top-1/2 translate-y-[-50%] md:right-0 right-[-40px] text-[clamp(18px,2.3076vw,30px)] bg-slate-200 rounded-full p-2 text-veryDarkBlue transition hover:bg-primaryRed hover:text-white'>
                    <GoChevronRight />
                </button>
            }
        </div>
    )
}

export default ImageSlider