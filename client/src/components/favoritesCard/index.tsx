// React Libraries
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
// Icons
import { IoMdClose } from 'react-icons/io';
// Components
import AddToBasketButton from "../addToBasketButton"
// Types
import { IProducts } from "../../@types/ProductTypes";
import { AppDispatch } from "../../redux/store";
// Favorites Service
import { removeFromFavoritesAsync } from "../../redux/favorite/service";

export interface IFavoritesProps {
    item: {
        _id: string,
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
    myKey: number
}


const FavoritesCard: React.FC<IFavoritesProps> = ({ item, myKey }) => {

    const formatter = new Intl.NumberFormat('tr-TR');

    const dispatch = useDispatch<AppDispatch>()

    // Remove from favorites
    const removeFromFavorites = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault()
        await dispatch(removeFromFavoritesAsync(item._id));
    }

    return (
        <Link to={`/shop/${item.id}`} className="min-h-[500px]  xl:max-w-[220px] w-full flex flex-col item-center cursor-pointer group">
            <div className="relative min-h-[320px] flex transition bg-white border-[2px] dark:border-white border-slate-200 rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                <button onClick={(e) => removeFromFavorites(e, item)} className="absolute group/favorite top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center transition border-2 border-veryDarkBlue bg-white rounded-full hover:border-white hover:bg-primaryRed">
                    <IoMdClose className="fill-veryDarkBlue stroke-veryDarkBlue group-hover/favorite:fill-white group-hover/favorite:stroke-white" />
                </button>
            </div>
            <div className="p-2 flex-1 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue dark:text-white">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue dark:text-grayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between mt-auto flex-col items-start gap-y-4">
                    <div className=' order-2 md:w-auto w-full'>
                        <AddToBasketButton item={item} myKey={myKey} />
                    </div>
                    <span className="text-base font-bold text-veryDarkBlue order-1 dark:text-white">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </Link>
    )
}

export default FavoritesCard