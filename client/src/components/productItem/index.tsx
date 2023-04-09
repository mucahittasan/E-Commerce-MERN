// React Libraries
import { Link } from 'react-router-dom';
// Components
import AddToBasketButton from '../addToBasketButton';
import FavoritesButton from '../favoritesButton';

interface ProductItemProps {
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
    myKey?: number
}

const ProductItem: React.FC<ProductItemProps> = ({ item, myKey }) => {

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');

    return (
        <Link to={`/shop/${item._id}`} className="min-h-[500px] sm:max-w-full max-w-sm w-full flex flex-col item-center cursor-pointer group">
            <div className="relative transition border-[2px] bg-white border-slate-200 dark:border-veryDarkBlue rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                <FavoritesButton item={item} />
            </div>
            <div className="p-2 flex-1 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue dark:text-white">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue dark:text-grayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between mt-auto md:flex-row flex-col md:items-center items-start gap-y-4">
                    <div className='md:order-1 order-2 md:w-auto w-full'>
                        <AddToBasketButton item={item} myKey={myKey} />
                    </div>
                    <span className="text-base font-bold text-veryDarkBlue md:order-2 order-1 dark:text-white">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem