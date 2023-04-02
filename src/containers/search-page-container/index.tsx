import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ProductItem from '../../components/productItem';

const SearchPageContainer = () => {

    const searchProducts = useSelector((state: RootState) => state.search.products);

    return (
        <div className='flex flex-col main-container mb-8'>
            <h2 className="main-title">Arama Sonuçları</h2>
            {searchProducts?.length !== 0 ?
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-8 gap-10'>
                    {searchProducts && searchProducts.map((item, index) => (
                        <ProductItem item={item} key={index} myKey={index} />
                    ))}
                </div> : <div className='font-bold text-2xl text-veryDarkBlue'>Aradığınız ürün <span className='text-primaryRed'>bulunamadı</span> :(</div>}
        </div>
    )
}

export default SearchPageContainer