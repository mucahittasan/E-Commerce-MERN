import { IProducts } from "../../@types/productsType"
import { HiOutlineHeart } from 'react-icons/hi'


const ProductItem = ({ item }: IProducts | any) => {

    return (
        <div className=" w-full flex flex-col item-center cursor-pointer group">
            <div className="relative transition border-[2px] border-slate-200 rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                <button className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center bg-slate-200 transition hover:bg-primaryOrange hover:text-white rounded-full"> <HiOutlineHeart /> </button>
            </div>
            <div className="p-2 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between items-center">
                    <button className="btn border-[2px] bg-white font-bold text-veryDarkBlue border-grayishBlue hover:text-white hover:bg-veryDarkBlue hover:border-veryDarkBlue">Sepete Ekle</button>
                    <span className="text-base font-bold text-veryDarkBlue">{item.price} TL</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem