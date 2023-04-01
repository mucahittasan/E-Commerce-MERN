// React Libraries
import { Link } from 'react-router-dom';
// Types
import { IProductItem } from '../../@types/ProductTypes'
// Components
import AddToBasketButton from '../addToBasketButton';
import FavoritesButton from '../favoritesButton';


const ProductItem: React.FC<IProductItem> = ({ item }) => {

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');


    return (
        <Link to={`/shop/${item.id}`} className="min-h-[500px] sm:max-w-full max-w-sm w-full flex flex-col item-center cursor-pointer group">
            <div className="relative transition border-[2px] border-slate-200 rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                <FavoritesButton item={item} />
            </div>
            <div className="p-2 flex-1 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between mt-auto md:flex-row flex-col md:items-center items-start gap-y-4">
                    <div className='md:order-1 order-2 md:w-auto w-full'>
                        <AddToBasketButton item={item} />
                    </div>
                    <span className="text-base font-bold text-veryDarkBlue md:order-2 order-1">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem