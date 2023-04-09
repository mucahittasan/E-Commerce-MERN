// React Libraries
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Icons
import { HiOutlineTrash } from 'react-icons/hi';
// Components
import ItemCount from '../itemCount';
// Dispatch Type
import { AppDispatch } from '../../redux/store';
// Basket Service
import { removeFromBasketAsync } from '../../redux/basket/service';

interface BasketItemProps {
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
}

const BasketItem: React.FC<BasketItemProps> = ({ item }) => {

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');

    const dispatch = useDispatch<AppDispatch>()

    const removeFromBasket = async (id: string) => {
        await dispatch(removeFromBasketAsync(id));
    }

    return (
        <div className="max-w-full w-full sm:flex-row flex-col flex justify-start border-2 dark:border-slate-600 rounded-md gap-x-6">
            <Link to={`/shop/${item._id}`} className="relative transition rounded p-2">
                <img src={item.main_image} alt={item.title} className="max-h-40 w-full object-contain transition duration-300" />
            </Link>
            <div className="p-2 flex-1 flex flex-col gap-y-[4px]">
                <Link to={`/shop/${item._id}`} className="text-base font-semibold text-veryDarkBlue dark:text-white">
                    <span>{item.title}</span>
                </Link>
                <p className="line-clamp-1 text-[13px] mb-6 text-darkGrayishBlue dark:text-grayishBlue">
                    {item.description}
                </p>
                <div className='flex mt-auto gap-x-8 flex-row-reverse justify-end'>
                    <div className="flex justify-between md:flex-row flex-col md:items-center items-start gap-y-4">
                        <span className="text-lg font-bold text-veryDarkBlue md:order-2 order-1 dark:text-white">{formatter.format(item.price)} TL</span>
                    </div>
                    <div className='justify-center sm:flex hidden'>
                        <ItemCount currentProduct={item} />
                    </div>
                </div>
            </div>
            <div className='flex justify-between p-2'>
                <div className='justify-center sm:hidden flex'>
                    <ItemCount currentProduct={item} />
                </div>
                <button onClick={() => removeFromBasket(item._id)} className='mx-4 text-2xl p-2 transition-all self-center hover:scale-[1.1] text-veryDarkBlue dark:text-white dark:hover:text-primaryRed hover:text-primaryRed'>
                    <HiOutlineTrash />
                </button>
            </div>
        </div>
    )
}

export default BasketItem